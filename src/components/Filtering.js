import React, { Component } from 'react';
import './Components.css';
import config from '../config'

class CategorySelect extends Component {

  constructor() {
    super()
    this.updateCategories = this.updateCategories.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.updateCategories()
  }

  updateCategories() {
    let self = this
    var url = new URL(config.apiUrl+'/item-accommodationtype')
    
    var filter = {}
    console.log(this.props)
    if(this.props.destination) {
      filter._destination = this.props.destination
    }
    
    console.log("filtering: ",filter)
    if(filter) {
      Object.keys(filter).forEach(key => url.searchParams.append(key, filter[key]))
    }
    
    fetch(url).then(function(response) {
      console.log(response)
      return response.json();
    })
    .then(function(json) { 
      console.log(json)
      if(json.error) { throw new TypeError(json.error.message); }
      self.setState({
        categories : json
      })
    })
    .catch(function(error) { console.log(error); });
  }

  handleChange(ev) {
    const value = (ev.target.value === 'no-value') ? undefined : ev.target.value
    console.log(value)
    if(value !== this.state._accommodationType) {
      this.setState({
        _accommodationType: value
      })
      this.props.onChange(value)
    }
  }

  render() {
    if(!this.state) {
      return (null)
    }

    return(
      <div className="col-md-12">
        <select value={this.state.category}
                data-placeholder="Categoria" 
                className="chosen-select"
                onChange={this.handleChange}
                onKeyPress={this.props.onKeyPress} >
          <option value="no-value" >Categoria</option>
          { this.state.categories.map(function(item, index) {
              return  (<option value={item._id} key={item._id}>{item.name}</option>)
            })
          }
        </select>
      </div>
    )
  }
}

export default class Filtering extends Component {

  constructor() {
    super()
    this.state = {}
    this.onSubmit = this.onSubmit.bind(this)
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    this.state = this.props.filter
  }


  handleSearchTextChange(ev) {
    this.setState({
      name: ev.target.value
    });
  }

  handleCategoryChange(value) {
    this.setState({
      _accommodationType: value
    });
  }

  getSearchFilter() {
    const filter = this.state
    //Remove undefined keys from state
    Object.keys(filter).forEach(key => ((filter[key] === undefined) || (filter[key] === '')) && delete filter[key])
    return filter
  }

  onSubmit() {
    console.log("onSubmit",this.getSearchFilter())
    this.props.onChange(this.getSearchFilter())
  }

  handleKeyPress(event) {
    if(event.key == 'Enter'){
      this.onSubmit()
    }
  }

  render(){
    return(
      <div className="margin-bottom-30">
        <h3 className="margin-top-0 margin-bottom-30">Filtrar</h3>

        <div className="row with-forms">
          <div className="col-md-12">
            <input  type="text" 
                    placeholder="Nombre"  
                    value={this.state.name}
                    onChange={this.handleSearchTextChange}
                    onKeyPress={this.handleKeyPress} />
          </div>
        </div>

        <div className="row with-forms">
            <CategorySelect destination={this.props.filter._destination} 
                            onChange={this.handleCategoryChange}
                            onKeyPress={this.handleKeyPress} />
        </div>

        <button onClick={ this.onSubmit } 
                className="button fullwidth margin-top-25"
                onKeyPress={this.handleKeyPress} >Buscar</button>
        
      </div>
    ) 
  }
}