$(function() {
            var todos = [{
                        text : "123123123",
                        done : true
                    }, {
                        text : "123123123",
                        done : false
                    }];
            var all = todos.length;
            var remaining = 0;
            $("#count-all").text(all);
            // 加载
            for (var i = 0; i < todos.length; i++) {
                var todo = todos[i];
                $("#ul-todo")
                        .append("<li><input class='check' type='checkbox' "
                                + (todo.done ? "checked" : "")
                                + "><span class='done-" + todo.done + "'>"
                                + todo.text + "</span></li>");
                remaining += todo.done ? 0 : 1;
            }
            $("#count-remaining").text(remaining);
            /* 添加 */
            $("#btn-add").bind("click", function() {
                var text = $("#input-todo").val();
                $("#ul-todo")
                        .append("<li><input class='check' type='checkbox'><span>"
                                + text + "</span></li>");
                $("#input-todo").val("");
                all = all + 1;
                $("#count-all").text(all);
                remaining = remaining + 1;
                $("#count-remaining").text(remaining);
                return false;
            });
            // 响应
            $("body").delegate(".check", "click", function() {
                        if ($(this)[0].checked) {
                            $(this).siblings("span").addClass("done-true");
                            remaining = remaining - 1;
                            $("#count-remaining").text(remaining);
                        } else {
                            $(this).siblings("span").removeClass("done-true");
                            remaining = remaining + 1;
                            $("#count-remaining").text(remaining);
                        }
                    });
            // 存档已经完成的
            $("#archive").bind("click", function() {
                        $("#ul-todo li").each(function() {
                                    if ($(this).find("input:checked").length > 0) {
                                        $(this).remove();
                                        all = all - 1;
                                        $("#count-all").text(all);
                                        $("#count-remaining").text(all);
                                    }
                                });
                        return false;
                    });
        });