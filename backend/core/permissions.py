from rest_framework import permissions

class IsStaffPermission(permissions.BasePermission):

    def has_permission(self, request, view):
        if request.user.is_authenticated and request.user.is_staff:
            return True
        return False
