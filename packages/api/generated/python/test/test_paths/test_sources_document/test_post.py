# coding: utf-8

"""


    Generated by: https://openapi-generator.tech
"""

import unittest
from unittest.mock import patch

import urllib3

import api_python_client
from api_python_client.paths.sources_document import post  # noqa: E501
from api_python_client import configuration, schemas, api_client

from .. import ApiTestMixin


class TestSourcesDocument(ApiTestMixin, unittest.TestCase):
    """
    SourcesDocument unit test stubs
    """
    _configuration = configuration.Configuration()

    def setUp(self):
        used_api_client = api_client.ApiClient(configuration=self._configuration)
        self.api = post.ApiForpost(api_client=used_api_client)  # noqa: E501

    def tearDown(self):
        pass

    response_status = 200






if __name__ == '__main__':
    unittest.main()
