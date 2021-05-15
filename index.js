$(document).ready(function () {
  function open(options) {
    const { DataJsonBase64, SourceCategoryID, SourceSystemObjectID } = options;
    $('.create-mission__overlay').css('display', 'flex');
    const url = `http://localhost:3000/create-mission?SourceSystemObjectID=${SourceSystemObjectID}&DataJsonBase64=${DataJsonBase64}&SourceCategoryID=${SourceCategoryID}`;
    $('#child-frame').attr('src', url);
  }

  function close() {
    $('.create-mission__overlay').css('display', 'none');
    $('#child-frame').removeAttr('src');
  }

  // $('#btn-create').click(() => {
  //   open({
  //     SourceCategoryID: 3,
  //     SourceSystemObjectID: 2150,
  //     DataJsonBase64:
  //       'eyJTb0t5SGlldSI6IkVRSC05IHRlc3QiLCJOZ2F5QmFuSGFuaCI6IiIsIkRvblZpQmFuSGFuaCI6IlBow7JuZyBWxINuIFRoxrAiLCJUcmljaFlldSI6IkVRSC05IHRlc3QifQ==',
  //   });
  // });

  $('.btn-close').click(() => {
    close();
  });
});

module.exports.close = close;
module.exports.open = open;
