from django.urls import path
from . import views


urlpatterns =[
    # path('api',views.getRoutes,name="routes"),
   # path('api/all',views.getExperiments,name="experiments"),
    path('db',views.getDBExperiments,name="dbexperiments"),
    path('api/add/',views.addExperiment,name="addition"),
    path('api/disable/',views.defaultExperiment,name="disable"),
]

