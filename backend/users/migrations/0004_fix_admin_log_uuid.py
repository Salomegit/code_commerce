from django.db import migrations, models
import django.db.models.deletion


def clear_admin_logs(apps, schema_editor):
    """
    Clear existing admin logs before altering the field.
    This is safe because admin logs are just history of admin actions.
    """
    db_alias = schema_editor.connection.alias
    LogEntry = apps.get_model('admin', 'LogEntry')
    
    # Delete all existing log entries (they're just admin history)
    deleted_count = LogEntry.objects.using(db_alias).count()
    LogEntry.objects.using(db_alias).all().delete()
    
    print(f"Deleted {deleted_count} admin log entries (admin history only)")


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_alter_user_options'),  # ← CHANGE THIS to your last migration number
        ('admin', '__latest__'),
    ]

    operations = [
        # Step 1: Clear existing logs
        migrations.RunPython(
            clear_admin_logs,
            reverse_code=migrations.RunPython.noop
        ),
        
        # Step 2: Drop the constraint
        migrations.RunSQL(
            sql="""
                ALTER TABLE django_admin_log 
                DROP CONSTRAINT IF EXISTS django_admin_log_user_id_fkey;
            """,
            reverse_sql=migrations.RunSQL.noop
        ),
        
        # Step 3: Change column type to UUID
        migrations.RunSQL(
            sql="""
                ALTER TABLE django_admin_log 
                ALTER COLUMN user_id TYPE uuid USING user_id::text::uuid;
            """,
            reverse_sql=migrations.RunSQL.noop
        ),
        
        # Step 4: Re-add the foreign key constraint
        migrations.RunSQL(
            sql="""
                ALTER TABLE django_admin_log 
                ADD CONSTRAINT django_admin_log_user_id_fkey 
                FOREIGN KEY (user_id) REFERENCES users(id) 
                ON DELETE CASCADE;
            """,
            reverse_sql=migrations.RunSQL.noop
        ),
    ]