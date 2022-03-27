from django.shortcuts import render
from django.http import JsonResponse
from .data import Data
from rest_framework.response import Response
from rest_framework.decorators import api_view
import pymongo
from bson.json_util import dumps
import json

from .utils import get_db
connect_string="mongodb+srv://xilan_yuan:123456xl@cluster0.fhlph.mongodb.net/Doorstep"
#my_client = pymongo.MongoClient(connect_string)
#url=/db
db_name='Doorstep'
collection_name='test'
db,client=get_db(db_name,connect_string)
db_collection=db[collection_name]
@api_view(['GET'])
def getDBExperiments(request):
    re=list(db_collection.find({'disable':"0"}))

    rechange=[]
    for item in re:
       
        copyitem=item
        copyitem['_id']=str(item['_id'])
        rechange.append(copyitem)
    return Response(rechange)

    #return Response(result)


#url=/api/add/?
@api_view(['POST'])
def addExperiment(request):
    print(request.POST)
    name=request.POST.get('name')
    email=request.POST.get('email')
    phone=request.POST.get('phone')
    
    find=db_collection.find_one({'name':name,'email':email,'phone':phone})
    if find is None:
        db_collection.insert_one({'name':name,'email':email,'phone':phone,'disable':"0"})
        print(111111)
        return Response(status=200,data="add successfully")
    else:
        #print(find['_id'])
        db_collection.update_one({"_id":find['_id']},{"$set":{"disable":"0"}})
        print(222222)
        return Response(status=200,data="input already exist and active")

#url=/api/disable/?
@api_view(['POST'])
def defaultExperiment(request):
    print(request.POST)
    name=request.POST.get('name')
    email=request.POST.get('email')
    phone=request.POST.get('phone')
    find=db_collection.find_one({'name':name,'email':email,'phone':phone})
    if find is None:
        return Response(status=404,data="input not exist, cannot disable")
    else:
        db_collection.update_one({"_id":find['_id']},{"$set":{"disable":"1"}})
        return Response(status=200,data="disable successfully")

    
