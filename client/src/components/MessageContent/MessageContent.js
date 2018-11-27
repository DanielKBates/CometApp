import React from "react";
import "./MessageContent.css";
import { Input } from "react-materialize";

//THIS KEY NEEDS TO BE HIDDEN//
const googleApiKey = "AIzaSyBqxoLKtpqHsvMm9aNpa6NWJ42t2OYnN9A";
const googleTranslate = require("google-translate")(googleApiKey);

class MessageContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messageSent: false,
      translated: false,
      translatedText: "",
      chosenLang: "en"
    };
  }

  langList = [
    { name: "Afrikaans", value: "af" },
    { name: "Albanian", value: "sq" },
    { name: "Arabic", value: "ar" },
    { name: "Azerbaijani", value: "az" },
    { name: "Basque", value: "eu" },
    { name: "Bengali", value: "bn" },
    { name: "Belarusian", value: "be" },

    { name: "Bulgarian", value: "bg" },
    { name: "Catalan", value: "ca" },
    { name: "Chinese Simplified", value: "zh-CN" },
    { name: "Chinese Traditional", value: "zh-TW" },
    { name: "Croatian", value: "hr" },
    { name: "Czech", value: "cs" },
    { name: "Danish", value: "da" },
    { name: "Dutch", value: "nl" },
    { name: "English", value: "en" },
    { name: "Esperanto", value: "eo" },
    { name: "Estonian", value: "et" },
    { name: "Filipino", value: "tl" },
    { name: "Finnish", value: "fi" },
    { name: "French", value: "fr" },
    { name: "Galician", value: "gl" },
    { name: "Gerogian", value: "ka" },
    { name: "German", value: "de" },
    { name: "Greek", value: "el" },
    { name: "Gujarati", value: "gu" },
    { name: "Haitian Creole", value: "ht" },
    { name: "Hebrew", value: "iw" },
    { name: "Hindi", value: "hi" },
    { name: "Hungarian", value: "hu" },
    { name: "Icelandic", value: "is" },
    { name: "Indonesian", value: "id" },
    { name: "Irish", value: "ga" },
    { name: "Italian", value: "it" },
    { name: "Japanese", value: "ja" },
    { name: "Kannada", value: "kn" },
    { name: "Korean", value: "ko" },
    { name: "latin", value: "la" },
    { name: "Latvian", value: "lv" },
    { name: "Lithuanian", value: "lt" },
    { name: "Macedonian", value: "mk" },
    { name: "Malay", value: "ms" },
    { name: "Maltese", value: "mt" },
    { name: "Norwegian", value: "no" },
    { name: "Persian", value: "fa" },
    { name: "Polish", value: "pl" },
    { name: "Portuguese", value: "pt" },
    { name: "Romanian", value: "ro" },
    { name: "Russian", value: "ru" },
    { name: "Serbian", value: "sr" },
    { name: "Slovak", value: "sk" },
    { name: "Slovenian", value: "sl" },
    { name: "Spanish", value: "es" },
    { name: "Swahili", value: "sw" },
    { name: "Swedish", value: "sv" },
    { name: "Tamil", value: "ta" },
    { name: "Telugu", value: "te" },
    { name: "Thai", value: "th" },
    { name: "Turkish", value: "tr" },
    { name: "Ukrainian", value: "uk" },
    { name: "Urdu", value: "ur" },
    { name: "Vietnamese", value: "vi" },
    { name: "Welsh", value: "cy" },
    { name: "Yiddish", value: "yi" }
  ];
  translate = (message, language) => {
    let that = this;
    if (this.props.text.length) {
      googleTranslate.translate(
        this.props.text,
        this.state.chosenLang,
        function (err, translation) {
          console.log(translation.translatedText);
          console.log(that);

          that.setState({
            translatedText: translation.translatedText,
            translated: true
          });
        }
      );
    } else return;
  };
  languageSelect = event => {
    this.setState({ chosenLang: event.target.value });
  };
  render() {
    return (
      <div className="messageContentParent">
        <li className="messageContentDiv">
          <div className="row messageContentRow">
            <p className="messageSender">{this.props.from}</p>
            {!this.state.translated ? (

              <p className="messageText">{this.props.text}</p>
            ) : (
                <p className="messageText">{this.state.translatedText}</p>
              )}
          </div>
          <div className="messageDateTimeDiv col s2 m2 l2">
            {/* 11:29 AM / 09-20-18 {formatDate(props.date)} */}
            {/* languages dropdown */}
            <Input
              name="chosenLang"
              s={12}
              type="select"
              onChange={this.languageSelect}
              className="langDrop"
            >
              {this.langList.length
                ? this.langList.map((languageObj, index) => (
                  <option
                    name={languageObj.name}
                    value={languageObj.value}
                    key={index}
                  >
                    {languageObj.name}
                  </option>
                ))
                : "Nope"}
            </Input>
            {/* translate submit button */}
            <div className="translateButtonDiv col s3 m3 l3">
              <button
                onClick={this.translate}
                className="btn waves-effect waves-light translateBtn grey"
              >
                Translate Text
              </button>
            </div>
          </div>
        </li>
      </div>


      // <li>
      //   {this.props.from} - {this.props.text} - {this.props.timestamp}
      // </li>
    );
  }
}

export default MessageContent;
