import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact'
import './Footer.css'
function Footer() {
	return (
		<MDBFooter className="font-small pt-4 mt-4 footer">
			<MDBContainer fluid className="text-center text-md-left">
				<MDBRow>
					<MDBCol md="6">
						<h5 className="title">Footer Content</h5>
						<p>
							Here you can use rows and columns here to organize your footer
							content.
						</p>
					</MDBCol>
					<MDBCol md="6">
						<h5 className="title">Links</h5>
						<ul>
							<li className="list-unstyled">
								<a href="#!">Link 1</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Link 2</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Link 3</a>
							</li>
							<li className="list-unstyled">
								<a href="#!">Link 4</a>
							</li>
						</ul>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<div className="footer-copyright text-center py-3">
				<MDBContainer fluid>
					&copy; {new Date().getFullYear()} Copyright:{' '}
					<a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
				</MDBContainer>
			</div>
		</MDBFooter>
	)
}

export default Footer
