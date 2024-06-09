import React from "react";
import './Plugin.module.css';
import {IDataEntryPluginProps} from "./Plugin.types";
import { Button } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'

const PluginInner = (propsFromParent: IDataEntryPluginProps) => {
    const {
        values,
        errors,
        warnings,
        fieldsMetadata,
        formSubmitted,
        setFieldValue,
        setContextFieldValue,
    } = propsFromParent;

    const { loading, error, data } = useDataQuery(myQuery)

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <span>Loading...</span>
    }





    // @ts-ignore
    return (
        <div style={{
            backgroundColor: 'white',
            width: '100vw',
            display: 'flex',
        }}>
            <div
                style={{
                    padding: '10px',
                    width: '100%',
                }}
            >
                <h3>Hello from a plugin 👋</h3>

                <p>Fields metadata:</p>
                <pre>{JSON.stringify(fieldsMetadata, null, 2)}</pre>

                <p>Values:</p>
                <pre>{JSON.stringify(values, null, 2)}</pre>

                <p>Errors:</p>
                <pre>{JSON.stringify(errors, null, 2)}</pre>

                <p>Warnings:</p>
                <pre>{JSON.stringify(warnings, null, 2)}</pre>

                <p>Save attempted:</p>
                <pre>{JSON.stringify(formSubmitted, null, 2)}</pre>

                <br />

                <button
                    style={{ marginTop: '10px' }}
                    onClick={() => {
                        setFieldValue({
                            fieldId: 'village',
                            value: 'NVP only',
                            options: {
                                error: 'This is an error',
                            }
                        })
                    }}
                >
                    Set value with error
                </button>

                <button
                    style={{ marginTop: '10px' }}
                    onClick={() => {
                        setContextFieldValue({
                            fieldId: 'geometry',
                            value: {
                                latitude: 60.0001,
                                longitude: 60.0001,
                            },
                        })
                    }}
                >
                    Set coordinates
                </button>

                <Button
                    name="Primary button"
                    onClick={logger1}
                    primary
                    large
                >
                    Click me.!
                </Button>

                <div>
                    <h1>Programs</h1>
                    <ul>
                        {' '}
                        List of 5 programs
                        {data.results.programs.map((prog) => (
                            <li key={prog.id}>{prog.displayName}</li>
                        ))}
                    </ul>
                </div>

            </div>




        </div>
    )
}
let logger1 = () => window.alert('It works!');
const myQuery = {
    results: {
        resource: 'programs',
        params: {
            pageSize: 20, //fetches 20 first programs in the system
            fields: ['id', 'displayName'],
        },
    },
}

export default PluginInner;
