import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    ART,
} from 'react-native'

const styles = require('./styles');

class SignPage extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }


    render(){



        return(
            <View style={styles.container}>
                <Text>
                    hello SignPage
                </Text>
            </View>
        )
    }
}

export default SignPage