var main = {
    init : function () {
        var _this = this;
        $('#btn-delete').on('click', function () {
            _this.delete();
        });
    },

    delete : function () {
        var split = location.pathname;
        var id = split('/')[3]; //url 마지막 부분

        fetch('/posts/delete/' + id, {
            method: 'DELETE',
        }).then(function(response) { // 응답 처리!
            // 요청 성공!
            if (response.ok) {
                alert('글이 삭제 되었습니다.');
                window.location.href='/'; // 목록 페이지로 이동!(리다이렉트)
            } else { // 요청 실패..
                alert('글을 삭제할 수 없습니다.');
            }
        });
    }
};

main.init();