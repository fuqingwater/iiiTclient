import React, {
    Component,
} from 'react';

import  {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';

import Util from '../util/util';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  
    itemcontainer: {
      width: Util.size.width,
      padding: 14,
      backgroundColor: '#fff',
      marginBottom: 10,
     
    },
    topshow: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      marginBottom: 10,
    },
    rightpart: {
      width: 100,
      flexDirection: 'row',
      justifyContent: 'center', 
    },
    leftpart: {
      flexDirection: 'row',
      justifyContent: 'center', 
    },
    avartor: {
      width: 40,
      height: 40,
      borderRadius: 20,
      overflow: 'hidden',
      marginRight: 8,
    },
    tagwrapper: {
       flexDirection: 'column',
      justifyContent: 'center',
    },
    uname: {
      fontSize: 13,
      marginBottom: 5,
    },
    time: {
      fontSize: 12,
      color: '#ccc',
    }
});

class MineAskItem extends Component {



    render() {
        return(
             <View style={styles.itemcontainer}>
                <View style={styles.topshow} >
                  <View style={styles.leftpart}>
                    <View style={styles.tagwrapper}>
                      <Text style={styles.time}>今天16:18</Text>
                    </View>
                  </View>
                  
                  <View style={styles.rightpart}>
                    <Icon name="thumbs-up" size={20} color="#000"  />
                    <Text style={{marginRight: 20,}}>47</Text>
                    <Icon name="comment-o" size={20} color="#000"  />
                    <Text>12</Text>
                  </View>
                </View>
                <View>
                  <Text>dsadasdasdasdasdasdasdsadasdasdasdasdasdasdasdasdsadasdasdsadasdasdsa</Text>
                </View>
             </View>

        )
    }
}


function mapStateToProps(state) {
  return {
   
  };
}

export default connect(mapStateToProps)(MineAskItem);