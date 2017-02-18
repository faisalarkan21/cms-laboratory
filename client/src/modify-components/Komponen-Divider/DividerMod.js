import React, {Component} from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Divider from 'material-ui/Divider';




const styles = {


    pemisah:{

        marginBottom:10
    },

}


class Pemisah extends Component {

    render (){
        return (

            <div>

                  <Divider style={styles.pemisah}/>


            </div>

        )
    }


}

export default Pemisah;