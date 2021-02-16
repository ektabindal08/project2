import React from 'react';
import './styles/index.css';
import Table from '../../common/Table/index'
import logo from './abc.png';
class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  renderUserDetail = () => {
    return (
      <div className="profile-detail">
        <div className="left-section">
          <img src={logo} className="logo-image" alt="Dummy image" />
        </div>

        <div className="right-section">
          <p>first name: jack</p>
          <p>first name: jack</p>
        </div>
      </div>
    );
  };
  renderTable = () => {
    const tableHeader = [{key:"companyName",label:"Company Name"},{key:"numberOfEmployee",label:"Number of employee"}];
    const tableData = [{companyName:"Jack PVT LTD","numberOfEmployee":10},{companyName:"DEJAVO PVT LTD","numberOfEmployee":20}]
    return (
      <Table tableColumns={tableHeader} tableRowData={tableData}></Table>
    );
  };
  render() {
    return (
      <div>
        {this.renderUserDetail()}
        {this.renderTable()}
      </div>
    );
  }
}

export default Profile;
