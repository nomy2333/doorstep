import pymongo
from pymongo import MongoClient
from django.conf import settings
import certifi

#from django.conf import settings
# connect_string="mongodb+srv://xilan_yuan:<123456xl>@cluster0.fhlph.mongodb.net/Doorstep"
#my_client = pymongo.MongoClient(connect_string)
def get_db(db_name, connect_string):
    client = MongoClient(connect_string,tlsCAFile=certifi.where())
    db = client[db_name]
    return db, client

