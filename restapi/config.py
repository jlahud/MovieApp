
from os import getenv 

database = {
    'HOST' : getenv('HOST'),
    'DBUSER' : getenv('DBUSER'),
    'PASSWORD' : getenv('PASSWORD'),
    'DATABASE' : getenv('DATABASE'),
    'PORT' : getenv('PORT','3306')
}

upload = {
    'upload_dir' : 'img/'
}
