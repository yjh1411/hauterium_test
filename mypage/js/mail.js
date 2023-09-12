
(function() {
    //validation functions
    function valideCheck(form){
      const val_email = form.querySelector("#email")
      if(validEmailCheck(val_email) == false){
        alert('올바른 이메일 주소를 입력해주세요.')
        val_email.value='';
        val_email.focus();
        return false;
      }
      const val_phone = form.querySelector("#phone")
      if(vaildPhoneCheck(val_phone) == false){
        alert('올바른 휴대전화 번호를 입력해주세요.')
        val_phone.value='';
        val_phone.focus();
        return false;
      }
      const val_password = form.querySelector("#password")
      const val_password_min = 8
      const val_password_max = 20
      if(validPasswordCheck(val_password) == false || val_password_max < val_password.value || val_password_min > val_password.value){
        alert(`${val_password_min}~${val_password_max}자 영문 대소문자, 숫자, 특수문자를 사용해주세요.`)
        val_password.value='';
        val_password.focus();
        return false;
      }
    }
    function validEmailCheck(obj){
      const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return (obj.value.match(pattern)!=null)
    }
    function vaildPhoneCheck(obj){
      const pattern = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;
      return (obj.value.match(pattern)!=null)
    }
    function validPasswordCheck(obj){
      const pattern = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/;
      return (obj.value.match(pattern)!=null)
    }
  
    // get all data in form and return object
    function getFormData(form) {
      var elements = form.elements;
      var honeypot;
  
      var fields = Object.keys(elements).filter(function(k) {
        if (elements[k].name === "honeypot") {
          honeypot = elements[k].value;
          return false;
        }
        return true;
      }).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });
  
      var formData = {};
      fields.forEach(function(name){
        var element = elements[name];
        
        // singular form elements just have one value
        formData[name] = element.value;
  
        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(', ');
        }
      });
  
      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      formData.formGoogleSendEmail
        = form.dataset.email || ""; // no email by default
  
      return {data: formData, honeypot: honeypot};
    }
    function handleFormSubmit(event) {  // handles form submit without any jquery
      event.preventDefault();           // we are submitting via xhr below
      var form = event.target;
      var formData = getFormData(form);
      var data = formData.data;
  
      // If a honeypot field is filled, assume it was done so by a spam bot.
      if (formData.honeypot) {
        return false;
      }
  
      disableAllButtons(form);
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            form.reset();
            //add the code in here what you want after POST
            alert("done")
          }
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      // xhr.send(encoded);
      valideCheck(form)
    }
    function loaded() {
      var forms = document.querySelectorAll("form.gform");
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
      }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);
  
    function disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  })();