import { useState, useEffect } from 'react';
import '../textExtractor.css';

function TextExtractor() {
  const headers = ['Date of Birth', 'IP Address', 'Email', 'Pincode', 'Phone'];

  const [extract, setExtract] = useState({
    dob: '',
    ip: '',
    email: '',
    pincode: '',
    phone: '',
  });

  const [arr, setArr] = useState([]);

  // Regex patterns for extraction
  const regexPatterns = {
    dob: /\b(\d{1,2}[-\/]\d{1,2}[-\/]\d{2,4})\b/,
    ip: /\b(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})\b/,
    email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/,
    pincode: /\b\d{6}\b/,
    phone: /\b\d{10}\b/,
  };

  useEffect(() => {
    const tempArr = Object.values(extract);
    setArr(tempArr);
  }, [extract]);

  const handleTextAreaChange = (e) => {
    const text = e.target.value;
    const newExtract = { ...extract };

    for (let key in regexPatterns) {
      const match = text.match(regexPatterns[key]);
      newExtract[key] = match ? match[0] : 'Not Found';
    }
    setExtract(newExtract);
  };

  return (
    <>
      <div>Text Extractor</div>
      <div>
        <textarea
          placeholder="Enter text here..."
          onChange={handleTextAreaChange}
          rows="6"
          cols="50"
        ></textarea>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              {headers.map((head, index) => (
                <th key={index}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {arr.map((ele, index) => (
                <td key={index}>{ele}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TextExtractor;
