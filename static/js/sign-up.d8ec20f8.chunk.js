(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{145:function(e,t,a){e.exports={primaryColor:"#ef5b4c",centerDirection:"0 auto",paragraph3:"12px",mainContainer:"73.125rem",errorTextWrapper:"ErrorValidation_errorTextWrapper__2DfJG",errorText:"ErrorValidation_errorText__AgGNX"}},146:function(e,t,a){e.exports={headingMobile:"30px",headingTablet:"40px",headingDesktop:"50px",paragraph1:"16px",paragraph2:"14px",paragraph3:"12px",primaryColor:"#ef5b4c",secondaryColor:"#007bff",hoverPrimaryColor:"#c94031",inputColor:"#cecece",focusValidColor:"#64aefd",focusValidColorShadow:"rgba(173, 222, 255, 0.5)",focusInvalidColorShadow:"rgba(253, 171, 194, 0.5)",marginForComponents:"40px",transitionDuration:"400ms",centerDirection:"SignUp_centerDirection__3PgXc",whiteText:"#fff",blackText:"#000",backgroundColor3:"rgb(238, 237, 230)",mainContainer:"73.125rem",registerFormWrapper:"SignUp_registerFormWrapper__1JKSg",registerFormTitle:"SignUp_registerFormTitle__31ezH",registerFormContent:"SignUp_registerFormContent__zq8iA",registerFormText:"SignUp_registerFormText__1x9rY",registrationForm:"SignUp_registrationForm__3xTFS",label:"SignUp_label__uhRfY",labelTitle:"SignUp_labelTitle__2sZ1i",labelPhoneTitle:"SignUp_labelPhoneTitle__2-XgF",inputSection:"SignUp_inputSection__1IGI6",inputSectionValid:"SignUp_inputSectionValid__3tIth SignUp_inputSection__1IGI6",inputSectionInvalid:"SignUp_inputSectionInvalid__33dZa SignUp_inputSection__1IGI6",inputNumberSection:"SignUp_inputNumberSection__sbTtV SignUp_inputSection__1IGI6",inputNumberSectionValid:"SignUp_inputNumberSectionValid__EJkOi SignUp_inputNumberSection__sbTtV SignUp_inputSection__1IGI6",inputNumberSectionInvalid:"SignUp_inputNumberSectionInvalid__ZoQSR SignUp_inputNumberSection__sbTtV SignUp_inputSection__1IGI6",inputNumberFormat:"SignUp_inputNumberFormat__3bSBD",positionsSection:"SignUp_positionsSection__3jMgg",selectLabelTitle:"SignUp_selectLabelTitle__ZjigN",labelContainer:"SignUp_labelContainer__2ei8m",radioLabel:"SignUp_radioLabel__3hgyK",inputRadioLabel:"SignUp_inputRadioLabel__1RKuD",radioLabelTitle:"SignUp_radioLabelTitle__1XH9y",photoLabelTitle:"SignUp_photoLabelTitle__DKeOn",photoInput:"SignUp_photoInput__2N6PG",labelPhotoInput:"SignUp_labelPhotoInput__3DQy9",labelPhotoInputValid:"SignUp_labelPhotoInputValid__1YW61 SignUp_labelPhotoInput__3DQy9",labelPhotoInputInvalid:"SignUp_labelPhotoInputInvalid__11yzA SignUp_labelPhotoInput__3DQy9",leftLabelPhotoInputBlack:"SignUp_leftLabelPhotoInputBlack__2WMex",leftLabelPhotoInputGrey:"SignUp_leftLabelPhotoInputGrey__1chHF SignUp_leftLabelPhotoInputBlack__2WMex",rightLabelPhotoInput:"SignUp_rightLabelPhotoInput__2Omel",signUpButton:"SignUp_signUpButton__rfrMV",firstClonePhotoInputBlack:"SignUp_firstClonePhotoInputBlack__1ndSM",secondClonePhotoInput:"SignUp_secondClonePhotoInput__1_Izz"}},212:function(e,t,a){"use strict";a.r(t);var n=a(147),i=a(31),o=a(32),r=a(35),l=a(33),p=a(36),s=a(0),c=a.n(s),u=a(148),m=a(15),h=a(3),_=a(34),d=a(145),g=a.n(d),b=function(e){var t=e.text;return c.a.createElement("div",{className:g.a.errorTextWrapper},c.a.createElement("p",{className:g.a.errorText},t))},S=a(146),f=a.n(S);a.d(t,"default",function(){return N});var I={name:"required|string|min:3",email:"required|email",phone:"required|number",position:"required",photo:"required"},E={"name.required":"Please choose a unique username for your account","name.min":"Your name is too short","email.required":"Enter a valid email address","email.email":"Email is invalid","phone.required":"Enter a valid phone number","phone.number":"Please write down only the numbers","position.required":"Please choose your position","photo.required":"Please upload your photo"},N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,p=new Array(o),c=0;c<o;c++)p[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(p)))).state={name:"",email:"",phone:null,position:"",photo:null,positions:[],token:"",isLoading:!1,error:null,errors:null},a.inputRef=Object(s.createRef)(),a.handleChange=function(e){var t=e.target,i=t.name,o=t.value;a.setState(Object(n.a)({},i,o))},a.formValidation=function(){var e=a.state,t=e.email,n=e.phone,i=a.inputRef.current.files[0],o={};return t&&!t.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)&&(o.email="You entered the wrong email"),n&&!n.match(/\+380\d{9}$/)&&(o.phone="Your phone number must begin with (+380) and then contain 9 digits"),i&&i.size>1048576&&(o.photo="Your photo should not be more than 1 MB"),!!(o.email||o.phone||o.photo)&&(a.setState({errors:o}),!0)},a.handleSubmit=function(e){a.setState({isLoading:!0}),e.preventDefault();var t=a.inputRef.current,n=a.state,i=n.name,o=n.email,r=n.phone,l=n.position,p=n.photo,s=n.token,c=a.props.onSubmit;a.formValidation()?console.log("validation failed"):Object(u.validateAll)({name:i,email:o,phone:r,position:l,photo:p},I,E).then(function(){var e=new FormData;e.append("position_id",2),e.append("name",i),e.append("email",o),e.append("phone",r),e.append("photo",t.files[0]),fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users",{method:"POST",body:e,headers:{Token:s}}).then(function(e){return e.json()}).then(function(e){if(!1===e.success){var t={};t.doubleUser=e.message,a.setState({errors:t})}else c(),a.reset()}).catch(function(e){a.setState({error:e})})}).catch(function(e){var t={};e.forEach(function(e){t[e.field]=e.message}),a.setState({errors:t})}).finally(function(){return a.setState({isLoading:!1})})},a.reset=function(){a.setState({name:"",email:"",phone:null,position:"",photo:null,errors:null})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),m.b().then(function(t){return e.setState({token:t.data.token})}).catch(function(t){return e.setState({error:t})}),m.a().then(function(t){return e.setState({positions:t.data.positions})}).catch(function(t){return e.setState({error:t})}).finally(function(){return e.setState({isLoading:!1})})}},{key:"render",value:function(){var e,t,a=this,n=this.state,i=n.name,o=n.email,r=n.phone,l=n.position,p=n.photo,s=n.positions,u=n.isLoading,m=n.error,d=n.errors;return c.a.createElement("div",null,u&&c.a.createElement(h.a,null),c.a.createElement("div",{className:f.a.registerFormWrapper},c.a.createElement("h2",{className:f.a.registerFormTitle},"Register to get a work"),c.a.createElement("div",{className:f.a.registerFormContent},c.a.createElement("p",{className:f.a.registerFormText},"Attention! After successful registration and alert, update the list of users in the block from the top"),c.a.createElement("form",{onSubmit:this.handleSubmit,encType:"multipart/form-data",method:"post",className:f.a.registrationForm},c.a.createElement("section",{className:f.a.labelContainer},c.a.createElement("label",{className:f.a.label},c.a.createElement("p",{className:f.a.labelTitle},"Name"),c.a.createElement("input",{type:"text",value:i,onChange:this.handleChange,name:"name",placeholder:"Your name",className:d&&d.name?f.a.inputSectionInvalid:f.a.inputSectionValid}),d&&c.a.createElement(b,{text:d.name})),c.a.createElement("label",{className:f.a.label},c.a.createElement("p",{className:f.a.labelTitle},"Email"),c.a.createElement("input",{type:"email",value:o,onChange:this.handleChange,name:"email",placeholder:"Your email",className:d&&d.email?f.a.inputSectionInvalid:f.a.inputSectionValid}),d&&c.a.createElement(b,{text:d.email})),c.a.createElement("label",{className:f.a.label},c.a.createElement("p",{className:f.a.labelPhoneTitle},"Phone number"),c.a.createElement("input",{type:"tel",value:r,onChange:this.handleChange,name:"phone",placeholder:"+380 XX  XXX  XX XX",className:d&&d.phone?f.a.inputNumberSectionInvalid:f.a.inputNumberSectionValid}),c.a.createElement("p",{className:f.a.inputNumberFormat},"Enter phone number in open format"),d&&c.a.createElement(b,{text:d.phone}))),c.a.createElement("section",{className:f.a.positionsSection},c.a.createElement("p",{className:f.a.selectLabelTitle},"Select your position"),c.a.createElement("div",{className:f.a.labelContainer},s.map(function(e){return c.a.createElement("label",{className:f.a.radioLabel,key:e.id},c.a.createElement("input",{type:"radio",checked:l===e.name,name:"position",value:e.name,onChange:a.handleChange,className:f.a.inputRadioLabel}),c.a.createElement("span",{className:f.a.radioLabelTitle},e.name))})),d&&c.a.createElement(b,{text:d.position})),c.a.createElement("section",{className:f.a.photoSection},c.a.createElement("p",{className:f.a.photoLabelTitle},"Photo"),c.a.createElement("input",{id:"file",type:"file",value:p,onChange:this.handleChange,name:"photo",className:f.a.photoInput,"data-multiple-caption":"{count} files selected",multiple:!0,accept:"image/jpeg",ref:this.inputRef}),c.a.createElement("label",{htmlFor:"file",className:d&&d.photo?f.a.labelPhotoInputInvalid:f.a.labelPhotoInputValid},c.a.createElement("div",{className:p?f.a.leftLabelPhotoInputBlack:f.a.leftLabelPhotoInputGrey},p?(e=p.slice(12),t=25,String(e).length>t?e.slice(0,t).concat("..."):e):"Upload your photo"),c.a.createElement("div",{className:f.a.rightLabelPhotoInput},"Browse")),d&&c.a.createElement(b,{text:d.photo})),m&&c.a.createElement(_.a,{text:m.message}),d&&c.a.createElement("div",{className:f.a.centerDirection},c.a.createElement(b,{text:d.doubleUser})),c.a.createElement("button",{type:"submit",className:f.a.signUpButton},"Sign up now")))))}}]),t}(s.Component)}}]);
//# sourceMappingURL=sign-up.d8ec20f8.chunk.js.map