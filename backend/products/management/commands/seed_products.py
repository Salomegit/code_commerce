from django.core.management.base import BaseCommand
from django.utils.text import slugify
from products.models import Category, Product
import random


class Command(BaseCommand):
    help = 'Seed the database with sample electronics shop data'

    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Starting database seeding...'))

        # Clear existing data (optional - comment out if you want to keep existing data)
        # Category.objects.all().delete()
        # Product.objects.all().delete()

        # Create main categories with subcategories
        categories_data = {
            'Smartphones': [
                'Android Phones',
                'iPhones',
                'Budget Phones',
                'Gaming Phones',
                'Flagship Models'
            ],
            'Laptops': [
                'Gaming Laptops',
                'Ultrabooks',
                'Business Laptops',
                'Chromebooks',
                'MacBooks'
            ],
            'Accessories': [
                'Phone Cases',
                'Screen Protectors',
                'Chargers & Cables',
                'Headphones & Earbuds',
                'Power Banks'
            ],
            'Tablets': [
                'iPad',
                'Android Tablets',
                'Kids Tablets',
                'Drawing Tablets',
                'E-readers'
            ],
            'Wearables': [
                'Smartwatches',
                'Fitness Trackers',
                'Smart Rings',
                'AR Glasses',
                'VR Headsets'
            ]
        }

        # Sample products data
        products_data = [
            {
                'name': 'Samsung Galaxy S24 Ultra',
                'description': 'Latest flagship smartphone with advanced camera system, 200MP telephoto lens, and Snapdragon 8 Gen 3 processor. Features 6.8" Dynamic AMOLED display with 120Hz refresh rate.',
                'price': 1299.99,
                'stock_quantity': 15,
                'category_name': 'Smartphones',
                'subcategory_name': 'Flagship Models',
                'image_url': 'https://via.placeholder.com/300?text=Galaxy+S24+Ultra'
            },
            {
                'name': 'Apple MacBook Pro 14"',
                'description': 'Powerful laptop featuring Apple M3 Pro chip, 18GB unified memory, and 512GB SSD storage. Perfect for professionals and creative work.',
                'price': 1999.99,
                'stock_quantity': 8,
                'category_name': 'Laptops',
                'subcategory_name': 'MacBooks',
                'image_url': 'https://via.placeholder.com/300?text=MacBook+Pro+14'
            },
            {
                'name': 'Sony WH-1000XM5 Headphones',
                'description': 'Industry-leading noise-canceling wireless headphones with 30-hour battery life, LDAC codec support, and premium sound quality.',
                'price': 399.99,
                'stock_quantity': 25,
                'category_name': 'Accessories',
                'subcategory_name': 'Headphones & Earbuds',
                'image_url': 'https://via.placeholder.com/300?text=Sony+WH1000XM5'
            },
            {
                'name': 'iPad Pro 12.9" M2',
                'description': 'Versatile tablet with M2 chip, stunning 12.9" Liquid Retina XDR display, and support for Apple Pencil Pro. Great for creative professionals and students.',
                'price': 1099.99,
                'stock_quantity': 12,
                'category_name': 'Tablets',
                'subcategory_name': 'iPad',
                'image_url': 'https://via.placeholder.com/300?text=iPad+Pro+129'
            },
            {
                'name': 'Apple Watch Series 9',
                'description': 'Advanced smartwatch with always-on Retina display, ECG app, blood oxygen monitoring, and comprehensive fitness tracking features.',
                'price': 429.99,
                'stock_quantity': 20,
                'category_name': 'Wearables',
                'subcategory_name': 'Smartwatches',
                'image_url': 'https://via.placeholder.com/300?text=Apple+Watch+Series+9'
            }
        ]

        # Create main categories and subcategories
        created_categories = {}
        
        for main_cat_name, subcategories in categories_data.items():
            # Create main category
            main_category, created = Category.objects.get_or_create(
                name=main_cat_name,
                slug=slugify(main_cat_name),
                parent=None
            )
            created_categories[main_cat_name] = main_category
            
            if created:
                self.stdout.write(
                    self.style.SUCCESS(f'✓ Created main category: {main_cat_name}')
                )
            else:
                self.stdout.write(
                    self.style.WARNING(f'→ Category already exists: {main_cat_name}')
                )

            # Create subcategories
            for subcat_name in subcategories:
                subcategory, created = Category.objects.get_or_create(
                    name=subcat_name,
                    slug=slugify(subcat_name),
                    parent=main_category
                )
                
                if created:
                    self.stdout.write(
                        self.style.SUCCESS(f'  ✓ Created subcategory: {subcat_name}')
                    )
                else:
                    self.stdout.write(
                        self.style.WARNING(f'  → Subcategory already exists: {subcat_name}')
                    )

        # Create products
        self.stdout.write(self.style.SUCCESS('\nCreating products...'))
        
        for product_data in products_data:
            # Get the subcategory
            subcategory = Category.objects.get(
                name=product_data['subcategory_name'],
                parent__name=product_data['category_name']
            )

            product, created = Product.objects.get_or_create(
                name=product_data['name'],
                defaults={
                    'description': product_data['description'],
                    'price': product_data['price'],
                    'stock_quantity': product_data['stock_quantity'],
                    'category': subcategory,
                    'image_url': product_data['image_url'],
                    'is_active': True
                }
            )

            if created:
                self.stdout.write(
                    self.style.SUCCESS(f'✓ Created product: {product.name}')
                )
            else:
                self.stdout.write(
                    self.style.WARNING(f'→ Product already exists: {product.name}')
                )

        self.stdout.write(self.style.SUCCESS('\n✓ Database seeding completed successfully!'))
        
        # Display summary
        self.stdout.write(self.style.SUCCESS('\n--- Summary ---'))
        self.stdout.write(f'Total Categories: {Category.objects.count()}')
        self.stdout.write(f'Total Products: {Product.objects.count()}')