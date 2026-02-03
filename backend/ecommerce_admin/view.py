from django.http import HttpResponseForbidden
from django.conf import settings
from health_check.views import MainView

class ProtectedHealthCheckView(MainView):
    def dispatch(self, request, *args, **kwargs):
        # Get token from query param or header
        token = request.GET.get('token') or request.headers.get('X-Health-Token')
        
        if token != settings.HEALTH_CHECK_TOKEN:
            return HttpResponseForbidden("Invalid or missing token")
        
        return super().dispatch(request, *args, **kwargs)