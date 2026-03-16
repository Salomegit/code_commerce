⚠️ IMPORTANT: Set the custom user model BEFORE running migrations!
Ensure settings.py contains:
pythonAUTH_USER_MODEL = 'users.User'
Then run:
bash# Create migrations
python manage.py makemigrations

# Apply migrations
python manage.py migrate
6. UUID Admin Log Fix (If Needed)
If you encounter the error: operator does not exist: integer = uuid
Quick Fix:
bash# 1. Rollback failed migration
python manage.py migrate users 0003

# 2. Run fix script (no psql needed!)
python manage.py shell < fix_admin_uuid.py

# 3. Fake the migration
python manage.py migrate users 0004 --fake
What this fixes:

Converts django_admin_log.user_id from INTEGER to UUID
Points foreign key to correct users table
Clears admin history (safe - just logs, not user data)

See FUTURE_PREVENTION.md for details.
7. Create Superuser
bashpython manage.py createsuperuser
8. Run Development Server
bashpython manage.py runserver
API available at: http://localhost:8000/
Admin panel: http://localhost:8000/admin/


# Seeding the Database

To populate your database with sample product data (5 categories with 5 subcategories each and 5 products), copy `seed_products.py` to `your_app/management/commands/` directory, then run the following command:

```bash
python manage.py seed_products
```

This will create 25 categories and 5 sample electronics products. The script uses `get_or_create()` so it's safe to run multiple times without creating duplicates.
