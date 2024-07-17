import React from 'react'

function PriceCard(props) {
  return <>
    {/* <!-- This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! --> */}
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
          <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
          <hr />
          <ul className="fa-ul">
            <li className={props.data.userEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.users}</li>
            <li className={props.data.storageEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.storage}</li>
            <li className={props.data.publicProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.publicProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.publicProjects}</li>
            <li className={props.data.communityAccessEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.communityAccessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.communityAccess}</li>
            <li className={props.data.privateProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.privateProjects}</li>
            <li className={props.data.phoneSupportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.phoneSupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.phoneSupport}</li>
            <li className={props.data.subDomainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.subDomainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.subDomain}</li>
            <li className={props.data.statusReportsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.statusReportsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.statusReports}</li>
          </ul>
          <div className="d-grid">
            <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Plus Tier --> */}
    {/* <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
            <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 Users</strong></li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div> */}
    {/* <!-- Pro Tier --> */}
    {/* <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
            <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong>
              </li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free
                Subdomains</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
            </ul>
            <div className="d-grid">
              <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div> */}
  </>
}


function PriceCard2() {
  return (
    <div>PriceCard</div>
  )
}

export default PriceCard2

export { PriceCard, PriceCard2 }