from django.db import models

SUBSCRIPTION_TYPES = (
    ('free', 'Free'),
    ('plus', 'Plus'),
    ('pro', 'Pro'),
)

class Customer(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subscription = models.CharField(max_length=10, choices=SUBSCRIPTION_TYPES, default='free')

    def __unicode__(self):
        return self.name
