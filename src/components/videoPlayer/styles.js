import {StyleSheet, Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },

    videoView: {
        flex: 1,
    },

    videoWindow: {
        width: window.width,
        height: window.width * 0.8,

        backgroundColor: 'rgba(0,0,0,0.05)',
    },

    videoSize: {
        position: 'absolute',
        width: window.width,
        height: window.width * 0.6,

        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    controls: {
        backgroundColor: "transparent",
        borderRadius: 5,
        position: 'absolute',
        bottom: 44,
        left: 4,
        right: 4,
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
    },
    innerProgressCompleted: {
        height: 20,
        backgroundColor: '#cccccc',
    },
    innerProgressRemaining: {
        height: 20,
        backgroundColor: '#2C2C2C',
    },
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        overflow: 'hidden',
        paddingBottom: 10,
    },
    skinControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    volumeControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ignoreSilentSwitchControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: "white",
        paddingLeft: 2,
        paddingRight: 2,
        lineHeight: 12,
    },
    nativeVideoControls: {
        top: 184,
        height: 300
    }


});