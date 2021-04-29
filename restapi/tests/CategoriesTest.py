import unittest
import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)

from run import create_app
import json

class CategoriesTest(unittest.TestCase):

    def setUp(self):
        app = create_app()
        self.client = app.test_client
        self.url = '/categories'
        self.id = 1

    def test_get(self):
        req = self.client().get(self.url)
        self.assertEqual(req.status_code , 200)
        req = self.client().get(f'{self.url}/{self.id}')
        self.assertEqual(req.status_code , 200)

    def test_post(self):
        data = {
            'name' : 'Romance'
        }
        req = self.client().post(self.url,data=json.dumps(data), content_type="application/json")
        self.assertEqual(req.status_code , 201)

    def test_put(self):
        data = {
            'name' : 'Action'
        }
        req = self.client().put(f'{self.url}/{self.id}',data=json.dumps(data), content_type="application/json")
        self.assertEqual(req.status_code , 200)

    def test_delete(self):
        req = self.client().delete(f'{self.url}/{self.id}')
        self.assertEqual(req.status_code , 204)
        req = self.client().delete(self.url)
        self.assertEqual(req.status_code , 204)

if __name__ == '__main__':
    unittest.main()
