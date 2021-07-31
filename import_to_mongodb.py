
import csv
import pymongo

connection_url="mongodb://localhost:27017/"

try:
    mongo_client=pymongo.MongoClient(connection_url)
    #print(mongo_client.server_info())-- to test- 
    database = mongo_client['assignment']
    result_collection = database['temperature']
    #print("Go to connection")

    with open('global-temperature.csv', 'r') as csvFile:
        reader = csv.reader(csvFile)
        for row in reader:
            #print(row)
            database.temperature.insert({'uid':row[3],'date':row[4],'value':row[5],'value_type':row[6]})

    csvFile.close()

except pymongo.errors.ServerSelectionTimeoutError as err:
    print(err) 

    

