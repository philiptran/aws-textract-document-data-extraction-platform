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


class FormFieldExtractionMetadata(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Metadata to assist with the extraction of this form field from a document
    """


    class MetaOapg:
        class properties:
            formKey = schemas.StrSchema
            tablePosition = schemas.IntSchema
            rowPosition = schemas.IntSchema
            columnPosition = schemas.IntSchema
            textractQuery = schemas.StrSchema
            __annotations__ = {
                "formKey": formKey,
                "tablePosition": tablePosition,
                "rowPosition": rowPosition,
                "columnPosition": columnPosition,
                "textractQuery": textractQuery,
            }
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["formKey"]) -> MetaOapg.properties.formKey: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["tablePosition"]) -> MetaOapg.properties.tablePosition: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["rowPosition"]) -> MetaOapg.properties.rowPosition: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["columnPosition"]) -> MetaOapg.properties.columnPosition: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["textractQuery"]) -> MetaOapg.properties.textractQuery: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing.Literal["formKey", "tablePosition", "rowPosition", "columnPosition", "textractQuery", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing.Literal["formKey"]) -> typing.Union[MetaOapg.properties.formKey, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing.Literal["tablePosition"]) -> typing.Union[MetaOapg.properties.tablePosition, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing.Literal["rowPosition"]) -> typing.Union[MetaOapg.properties.rowPosition, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing.Literal["columnPosition"]) -> typing.Union[MetaOapg.properties.columnPosition, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing.Literal["textractQuery"]) -> typing.Union[MetaOapg.properties.textractQuery, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing.Literal["formKey", "tablePosition", "rowPosition", "columnPosition", "textractQuery", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        formKey: typing.Union[MetaOapg.properties.formKey, str, schemas.Unset] = schemas.unset,
        tablePosition: typing.Union[MetaOapg.properties.tablePosition, int, schemas.Unset] = schemas.unset,
        rowPosition: typing.Union[MetaOapg.properties.rowPosition, int, schemas.Unset] = schemas.unset,
        columnPosition: typing.Union[MetaOapg.properties.columnPosition, int, schemas.Unset] = schemas.unset,
        textractQuery: typing.Union[MetaOapg.properties.textractQuery, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'FormFieldExtractionMetadata':
        return super().__new__(
            cls,
            *args,
            formKey=formKey,
            tablePosition=tablePosition,
            rowPosition=rowPosition,
            columnPosition=columnPosition,
            textractQuery=textractQuery,
            _configuration=_configuration,
            **kwargs,
        )
