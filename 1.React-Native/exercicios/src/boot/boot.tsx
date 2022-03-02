import React from 'react';
import { View } from 'react-native';
import Layout from '../core/layout/layout';
import { BootComponent } from './boot.component';

export default function Boot() {
    var _boot: BootComponent = new BootComponent();
    
    return (
        <View>
            <Layout></Layout>
        </View>
    )
}