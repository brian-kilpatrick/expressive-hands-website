import React from "react";
import './mail-signup.scss'
// import './mc-validate';
// import './mailchimp-custom'

const MailSignUp = () => (
    <div id="mc_embed_signup">
      <form
          action="https://myexpressivehands.us20.list-manage.com/subscribe/post?u=ab41e6622ae5244b0c43b9c59&amp;id=670535341f"
          method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
          target="_blank" noValidate>
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe to our mailing list for the latest information from Expressive Hands!</h2>
          <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span>
            </label>
            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL"/>
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FNAME">First Name </label>
            <input type="text" name="FNAME" className="" id="mce-FNAME"/>
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-LNAME">Last Name </label>
            <input type="text" name="LNAME" className="" id="mce-LNAME"/>
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-MMERGE6">Zip Code </label>
            <input type="text" name="MMERGE6" className="" id="mce-MMERGE6"/>
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" ></div>
            <div className="response" id="mce-success-response" ></div>
          </div>
          <div id="mailchimp-input" aria-hidden="true"><input type="text"
                                                                                    name="b_ab41e6622ae5244b0c43b9c59_670535341f"
                                                                                    tabIndex="-1"/></div>
          <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                                        className="button"/></div>
        </div>
      </form>
    </div>
);

export default MailSignUp;