import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './ExampleScreenStyle'
import { Images } from 'App/Theme'
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components';

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class ExampleScreen extends React.Component {
  componentDidMount() {
    this._fetchUser()
  }

  render() {
    const isHermes = () => global.HermesInternal != null;
    return (
      <StyledView>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <View style={Style.content}>
              <View style={Style.logoContainer}>
                <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
              </View>
              <Row>
                <Icon name="ios-rocket" size={25} color="steelblue" />
                <StyledText>
                  {isHermes && 'Using Hermes Engine'}
                </StyledText>
              </Row>
              <Text style={Style.text}>To get started, edit App.js</Text>
              <Text style={Style.instructions}>{instructions}</Text>
              {this.props.userErrorMessage ? (
                <Text style={Style.error}>{this.props.userErrorMessage}</Text>
              ) : (
                  <View>
                    <Text style={Style.result}>
                      {"I'm a fake user, my name is "}
                      {this.props.user.name}
                    </Text>
                    <Text style={Style.result}>
                      {this.props.liveInEurope ? 'I live in Europe !' : "I don't live in Europe."}
                    </Text>
                  </View>
                )}
              <Button onPress={() => this._fetchUser()} title="Refresh" />
            </View>
          )}
      </StyledView>
    )
  }

  _fetchUser() {
    this.props.fetchUser()
  }
}

ExampleScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen)

const StyledView = styled.View`
  margin-top: 30;
  flex: 1;
  justify-content: center;
`;

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 10;
`;

const StyledText = styled.Text`
  margin-left: 10;
  justify-content: center;
  font-size: 20;
`;