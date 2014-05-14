
/**
 * 
 * zhia.mengza 2014��5��14������10:23:09
 */

function TodoCtrl($scope) {
    // ����
    $scope.todos = [{
                text : "123123123",
                done : true
            }, {
                text : "123123123",
                done : false
            }];
    // ���
    $scope.addTodo = function() {
        $scope.todos.push({
                    text : $scope.todoText,
                    done : false
                });
        $scope.todoText = "";
    };
    // ʣ�����
    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
                    count += todo.done ? 0 : 1;
                });
        return count;
    };
    // �浵�����
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