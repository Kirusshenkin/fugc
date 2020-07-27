import React, { Component, Fragment } from 'react';
import ReactPaginate from 'react-paginate'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import { Row, Col } from 'react-bootstrap';

import Loader from './сomponents/UI/Loader/Loader'
import Table from './сomponents/Table/Table'
import DetailRowView from './сomponents/DetailRowView/DetailRowView'
import RowsSelector from './сomponents/UI/RowsSelector/RowsSelector'
import TableSearch from './сomponents/TableSearch/TableSearch'
import Modal from './сomponents/UI/Modal/Modal'

import _ from 'lodash'

class App extends Component {

  state = {
    // Rows: false,
    isLoading: false,
    data: [],
    search: '',
    sort: 'asc',
    sortField: 'id',
    row: null,
    currentPage: 0
  }

  async fetchData(count) {
    const url = `http://www.filltext.com/?rows=${count}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    const response = await fetch(url)
    const data = await response.json()

    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort)
    })
  }

  RowsHandler = count => {
    this.setState({
      // Rows: true,
      isLoading: true
    })

    this.fetchData(count)
  }

  onSort = sortField => {
    const clonedData = this.state.data.concat()
    const sort = this.state.sort === 'asc' ? 'desc' : 'asc'
    const data = _.orderBy(clonedData, sortField, sort)
    this.setState({data, sort, sortField})
  }

  pageChangeHandler = ({selected}) => {
    this.setState({currentPage: selected})
  }

  searchHandler = search => {
    this.setState({search, currentPage: 0})
  }

  onRowSelect = row => {
    this.setState({row})
  }

  onCreated = form => {
    console.log({form})
    // this.setState(state => {
      this.state.data.push({
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        phone: form.phone.value,
        email: form.email.value,
        id: 5000
      });
      this.setState({})
      // return state
    // });
    // this.setState({form})
  }
  
  getFilteredData() {
    const {data, search} = this.state

    if(!search) {
      return data
    }

    return data.filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
      || item['lastName'].toLowerCase().includes(search.toLowerCase())
      || item['email'].toLowerCase().includes(search.toLowerCase())
      || item['phone'].toLowerCase().includes(search.toLowerCase())
    })
  }

  render() {
    const pageSize = 50

    if(!this.state.data.length) {
      return (
        <Container>
          <Row>
            <Col>
            {this.state.isLoading
            ? <Loader/>
            :
              <RowsSelector
                onChangeRows={this.RowsHandler}
              />
            }
            </Col>
          </Row>
        </Container>
      )
    }
    const filteredData = this.getFilteredData()
    const pageCount = Math.ceil(filteredData.length / pageSize)
    const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage]

    return (
      <Container>
        <Row>
          <Col>
          {/* {
            (!this.state.data.length)
              ?<RowsSelector
              onChangeRows={this.RowsHandler}
            />
          : null
          } */}

          {
            this.state.isLoading
            ? <Loader/>
            : <Fragment> 
              <TableSearch 
                onSearch={this.searchHandler}
                onKeyPress={this.searchHandler}
              />
              <Modal
                onCreated={this.onCreated}
              />
              <Table
                data={displayData}
                onSort={this.onSort}
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect}
              />
            </Fragment>
          }
          { 
            this.state.data.length > pageSize
            ? <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.pageChangeHandler}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                forcePage={this.state.currentPage}
              />
            : null
          
          }

          {
            this.state.row
              ? <DetailRowView person={this.state.row} />
              : null
          }
              
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
