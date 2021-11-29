import React from 'react';
import renderer from 'react-test-renderer';
import Error from '.';

test('Error renders correctly', () => {
    const sampleError = renderer.create(
        <Error error="Error:" description="Could not authenticate you" />
    )
    
    const tree = sampleError.toJSON();
    expect(tree).toMatchSnapshot();
})