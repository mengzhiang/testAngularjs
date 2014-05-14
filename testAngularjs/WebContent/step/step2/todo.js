
/**
 * 
 * zhia.mengza 2014年5月14日上午10:23:09
 */

function TodoCtrl($scope) {
    // 数据
    $scope.todos = [{
                text : "123123123",
                done : true
            }, {
                text : "123123123",
                done : false
            }];
    // 添加
    $scope.addTodo = function() {
        $scope.todos.push({
                    text : $scope.todoText,
                    done : false
                });
        $scope.todoText = "";
    };
    // 剩余多少
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
                    count += todo.done ? 0 : 1;
                });
        return count;
    };
    // 存档已完成
    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
                    if (!todo.done) {
                        $scope.todos.push(todo);
                    }
                });
    };
}