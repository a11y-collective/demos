// Code forked from https://dequeuniversity.com Deque University</a>.

$(document).ready(charsRemaining);
var politeIdx = 0;
function charsRemaining() {
    var cachedLength;
    var politeQueue = true;
    var alreadyAlerted = false;
    // the total number of characters allowed:
    var totalChars = 150;
    // the number of characters that
    // triggers the polite announcement:
    var politeFlag = 80;
    // the number of characters that
    // triggers the assertive announcement:
    var assertiveFlag = 130;
    var $message = $('#message');
    var $alertDialog = $('#zero-characters');
    var $close = $('#close-char-modal');
    $message.attr('maxlength', totalChars);
    $message.on('keyup', function (e) {
        // maxlength polyfill:
        // Get the value
        var text = $(this).val();
        // Get the maxlength
        var limit = $(this).attr('maxlength') || totalChars;
        // Check if the length exceeds what is permitted
        if(text.length > limit){
            // Truncate the text if necessary
            $(this).val(text.substr(0, limit));
        }
        // chars remaining / alert dialog:
        var realLength = $message.val().length;
        var remaining = totalChars - realLength;
        updateRemaining(remaining);
        if (remaining <= 0) {
            if (!alreadyAlerted) {
                // show the dialog
                cachedLength = null;
                $alertDialog.show();
                $('#close-char-modal')
                    .first()
                    .focus();
            }
        }
        // if we have set the cachedLength (when the dialog was closed),
        // lets check if the length has changed, and if it has, reset the
        // alert boolean.
        if (cachedLength && alreadyAlerted) {
            // check if it has changed...
            if (cachedLength !== $message.val().length) {
                alreadyAlerted = false;
            }
        }
        // 70-60 atomic true
        // 60 set it to false
        // 20 atomic true
        if (realLength >= politeFlag && realLength < assertiveFlag) {
            // polite announcement...
            $('#live-region-text').attr('aria-live', 'polite');
            if (realLength >= 90) {
                $('#live-region-text').attr('aria-atomic', 'false');
            } else {
                $('#live-region-text').attr('aria-atomic', 'true');
            }
        } else if (realLength >= assertiveFlag) {
            // assertive announcement...
            $('#live-region-text').attr({
                'aria-live': 'assertive',
                'aria-atomic': 'true'
            });
        } else { // clean up (remove the aria-live and aria-atomic attributes)
            $('#live-region-text')
                .removeAttr('aria-live')
                .removeAttr('aria-atomic');
        }
    });
    $alertDialog.on('keydown', function (e) {
        var which = e.which;
        if (which === 9) {
            e.preventDefault();
        } else if (which === 27) {
            $close.click();
        }
    });
}
function updateRemaining(charsLeft) {
    $('#chars-remaining .count').html(charsLeft);
}
function nonSpecialKey(code) {
    var nonSpecial = false;
    if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90)) {
        nonSpecial = true;
    }
    return nonSpecial;
}
function noAtomic(num) {
    var stringNum = num.toString();
    var lastDigit = parseInt(stringNum[stringNum.length - 1], 10);
    return lastDigit !== 0 && lastDigit !== 5;
}

