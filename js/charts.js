var ctx1 = document.getElementById("piechart1");
    ctx1.height = 500;
    var ctx2 = document.getElementById("piechart2");
    ctx2.height = 500;
    
    new Chart(document.getElementById("piechart1"), {
            type: 'pie',
            data: {
              labels: ["Government: $41,086,002", "Gifts/Grants: $10,814,940","Other: $20,896,220"],
              datasets: [{
                label: "Dollars (millions)",
                backgroundColor: ["#009ADA", "#FCB51A","#DE1C52"],
                data: [56.4,14.9,28.7]
              }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                	labels: {
                  	fontSize: 16,
                    fontColor: '#fff',
                  },
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        fontSize: 16
                    }
                }
            }
        });    

    new Chart(document.getElementById("piechart2"), {
            type: 'pie',
            data: {
              labels: ["Programs: $60,581,432", "Administrative: $10,376,855","Fundraising: $3,734,041"],
              datasets: [{
                label: "Dollars (millions)",
                backgroundColor: ["#009ADA", "#FCB51A","#DE1C52"],
                data: [81.1,13.9,5]
              }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                	labels: {
                  	fontSize: 16,
                    fontColor: '#fff',
                  },
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        fontSize: 16
                    }
                }
            }
        });