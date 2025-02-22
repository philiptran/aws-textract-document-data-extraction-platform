# coding: utf-8

"""
    AWS Docs API

    API for AWS Docs  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from api_python_client import schemas  # noqa: F401


class SubmitSourceDocumentInput(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Request to submit a document
    """


    class MetaOapg:
        required = {
            "schemaId",
            "name",
            "documentId",
            "location",
        }
        class properties:
            schemaId = schemas.StrSchema
            documentId = schemas.StrSchema
            name = schemas.StrSchema
        
            @classmethod
            @property
            def location(cls) -> typing.Type['S3Location']:
                return S3Location
            __annotations__ = {
                "schemaId": schemaId,
                "documentId": documentId,
                "name": name,
                "location": location,
            }
    
    schemaId: MetaOapg.properties.schemaId
    name: MetaOapg.properties.name
    documentId: MetaOapg.properties.documentId
    location: 'S3Location'
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["schemaId"]) -> MetaOapg.properties.schemaId: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["documentId"]) -> MetaOapg.properties.documentId: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["name"]) -> MetaOapg.properties.name: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["location"]) -> 'S3Location': ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing.Literal["schemaId", "documentId", "name", "location", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing.Literal["schemaId"]) -> MetaOapg.properties.schemaId: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing.Literal["documentId"]) -> MetaOapg.properties.documentId: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing.Literal["name"]) -> MetaOapg.properties.name: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing.Literal["location"]) -> 'S3Location': ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing.Literal["schemaId", "documentId", "name", "location", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        schemaId: typing.Union[MetaOapg.properties.schemaId, str, ],
        name: typing.Union[MetaOapg.properties.name, str, ],
        documentId: typing.Union[MetaOapg.properties.documentId, str, ],
        location: 'S3Location',
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'SubmitSourceDocumentInput':
        return super().__new__(
            cls,
            *args,
            schemaId=schemaId,
            name=name,
            documentId=documentId,
            location=location,
            _configuration=_configuration,
            **kwargs,
        )

from api_python_client.model.s3_location import S3Location
