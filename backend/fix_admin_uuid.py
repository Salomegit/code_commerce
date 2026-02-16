"""
Fix UUID Admin Log Issue - Python Script
Run with: python manage.py shell < fix_admin_uuid.py

This script fixes the admin log foreign key issue without needing psql
"""

from django.db import connection
from django.contrib.admin.models import LogEntry

print("=" * 70)
print("🔧 Fixing UUID Admin Log Issue")
print("=" * 70)

# Step 1: Clear admin logs
print("\n📊 Step 1: Clearing admin logs...")
log_count = LogEntry.objects.count()
LogEntry.objects.all().delete()
print(f"✅ Deleted {log_count} admin log entries (just history, not important)")

# Step 2: Fix the database schema
print("\n🔧 Step 2: Fixing database schema...")

with connection.cursor() as cursor:
    try:
        # Drop ALL foreign key constraints on user_id
        print("   → Dropping old foreign key constraints...")
        cursor.execute("""
            DO $$ 
            DECLARE
                r RECORD;
            BEGIN
                FOR r IN (
                    SELECT constraint_name 
                    FROM information_schema.table_constraints 
                    WHERE table_name = 'django_admin_log' 
                    AND constraint_type = 'FOREIGN KEY'
                    AND constraint_name LIKE '%user_id%'
                )
                LOOP
                    EXECUTE 'ALTER TABLE django_admin_log DROP CONSTRAINT IF EXISTS ' || quote_ident(r.constraint_name);
                END LOOP;
            END $$;
        """)
        print("   ✅ Dropped old constraints")
        
        # Change column type to UUID
        print("   → Converting user_id column to UUID type...")
        cursor.execute("""
            ALTER TABLE django_admin_log 
            ALTER COLUMN user_id TYPE uuid USING NULL;
        """)
        print("   ✅ Changed user_id to UUID type")
        
        # Add correct foreign key constraint pointing to users table
        print("   → Adding new foreign key to users table...")
        cursor.execute("""
            ALTER TABLE django_admin_log 
            ADD CONSTRAINT django_admin_log_user_id_fkey 
            FOREIGN KEY (user_id) REFERENCES users(id) 
            ON DELETE CASCADE;
        """)
        print("   ✅ Added new foreign key constraint")
        
        # Verify
        cursor.execute("""
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'django_admin_log' 
            AND column_name = 'user_id';
        """)
        result = cursor.fetchone()
        
        print("\n" + "=" * 70)
        print("🎉 SUCCESS! Admin log is now fixed!")
        print("=" * 70)
        print(f"\n✅ user_id column type: {result[1]}")
        print("\nYou can now:")
        print("  1. Fake the migration: python manage.py migrate users 0004 --fake")
        print("  2. Start server: python manage.py runserver")
        print("  3. Visit admin: http://localhost:8000/admin/")
        print("\n" + "=" * 70)
        
    except Exception as e:
        print(f"\n❌ Error occurred: {e}")
        print("\nPlease share this error message for help.")
        import traceback
        traceback.print_exc()