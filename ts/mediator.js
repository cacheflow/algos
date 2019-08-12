let mediator = []

let orgChart = {
  addNewEmployee: function() {
    let employeeDetail = this.getEmployeeDetail()

    employeeDetail.on('complete', function(employee) {
      let managerSelector = this.selectManager(employee)
      managerSelector.on('save', function(employee) {
        employee.save()
      })
    })
  }
}