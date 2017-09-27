import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { RadioButtons } from 'react-native-radio-buttons'

class ListOfLists extends React.Component {
  constructor () {
    super()
    this.renderCheckList = this.renderCheckList.bind(this)
    this.state = {}
  }

  renderCheckList () {
    const options = this.props.lists

    function setSelectedOption (checkListOption) {
      this.setState({
        checkListOption
      })
    }

    function renderOption (option, selected, onSelect, index) {
      const textStyle = {
        paddingTop: 10,
        paddingBottom: 10,
        color: 'black',
        flex: 1,
        fontSize: 14
      }
      const baseStyle = {
        flexDirection: 'row'
      }
      var style
      var checkMark

      if (index > 0) {
        style = [baseStyle, {
          borderTopColor: '#eeeeee',
          borderTopWidth: 1
        }]
      } else {
        style = baseStyle
      }

      if (selected) {
        checkMark = <Text style={{
          flex: 0.1,
          color: '#007AFF',
          fontWeight: 'bold',
          paddingTop: 8,
          fontSize: 20,
          alignSelf: 'center'
        }}>✓</Text>
      }

      return (
        <TouchableWithoutFeedback onPress={onSelect} key={index}>
          <View style={style}>
            <Text style={textStyle}>{option}</Text>
            {checkMark}
          </View>
        </TouchableWithoutFeedback>
      )
    }

    function renderContainer (options) {
      return (
        <View style={{
          backgroundColor: 'white',
          paddingLeft: 20,
          borderTopWidth: 1,
          borderTopColor: '#cccccc',
          borderBottomWidth: 1,
          borderBottomColor: '#cccccc'
        }}>
          {options}
        </View>
      )
    }

    return (
      <View style={{flex: 1}}>
        <View style={{marginTop: 10, backgroundColor: 'white'}}>
          <Text style={{padding: 20, fontWeight: 'bold'}}>VerticalSelect</Text>

          <View style={{
            backgroundColor: '#eeeeee',
            paddingTop: 5,
            paddingBottom: 5
          }}>
            <Text style={{
              color: '#555555',
              paddingLeft: 20,
              marginBottom: 5,
              marginTop: 5,
              fontSize: 12
            }}>ACCENT</Text>
            <RadioButtons
              options={options}
              onSelection={setSelectedOption.bind(this)}
              selectedOption={this.state.checkListOption}
              renderOption={renderOption}
              renderContainer={renderContainer}
            />
          </View>
          <Text style={{
            margin: 20
          }}>Selected accent: {this.state.checkListOption || 'none'}</Text>
        </View>
      </View>)
  }

  render () {
    console.log(this.props.lists)
    return this.renderCheckList()
  }
}

export default ListOfLists
