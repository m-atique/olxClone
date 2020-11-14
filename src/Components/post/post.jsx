import React, { Component } from 'react';
import { connect } from 'react-redux'
import history from '../../config/history'
import './post.css'

let goto_add = () => {
    history.push('/selleradd')

}
let show_subCat = (value) => {

    var col = document.getElementById('subcat')
    col.innerText = ""


    for (let i = 0; i < value.length; i++) {
        var row = document.createElement('tr')
        var btn = document.createElement('button')
        btn.onclick = function () { goto_add(); };
        btn.setAttribute('class', 'catageries')
        btn.innerHTML = value[i]
        row.appendChild(btn)
        col.appendChild(row)

    }

}

class Post extends Component {


    render() {
        return (
            <div className='border border-black m-5 p-5'>
                <table >
                    <td >
                        {this.props.catagery.map((value, key) => {
                            return (<tr key={key} >
                                <button className='catageries' onClick={() => show_subCat(value.sub)}>{value.main}</button>
                            </tr>)
                        })}
                    </td>
                    <td id="subcat">

                    </td>
                </table>

            </div>
        );
    }
}
const mapStateProps = (state) => ({
    catagery: state.Catagery.Catagery

})

export default connect(mapStateProps, null)(Post);