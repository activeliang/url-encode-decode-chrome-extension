// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// 'use strict';

// let changeColor = document.getElementById('changeColor');
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };
const urlContent = document.querySelector('#urlFiled');
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  urlContent.value = tabs[0].url;
  urlContent.select();
});
const encodeBtn = document.querySelector('#encode');
const decodeBtn = document.querySelector('#decode');
const copyBtn = document.querySelector('#copy');

encodeBtn.onclick = () => {
  const urlEncode = encodeURIComponent(urlContent.value);
  urlContent.value = urlEncode
};

decodeBtn.onclick = () => {
  const urlDecode = decodeURIComponent(urlContent.value);
  urlContent.value = urlDecode
};

copyBtn.onclick = () => {
  urlContent.select()
  navigator.clipboard.writeText(urlContent.value)
  document.querySelector('#copyAlert').style.display = 'initial';
  setTimeout(() => {
    document.querySelector('#copyAlert').style.display = 'none';
  }, 500)
};
