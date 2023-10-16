import BarChart from "../../../ui/BarChart";
import DoughnutChart from "../../../ui/DoughnutChart";
import Card from "../Card";
export default function AdminDashboard(){
    return(
    <div class="page-wrapper">
        <div class="content container-fluid">

            <div class="page-header">
            <div class="row">
                <div class="col-sm-12">
                    <div class="page-sub-header">
                        <h3 class="page-title">Welcome Department!</h3>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">Department</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
           
               <Card
                 title="Student"
                 count = "20"
                 image = "/img/icons/dash-icon-01.svg"
                 link ="/department/student"
               />
               <Card 
                title ="Teachers"
                count = "50"
                image = "/img/icons/dash-icon-02.svg"
               />
               {/* <Card
                title = "Departments"
                count = "7"
                image ="/img/icons/dash-icon-03.svg"
               /> */}
               <Card
                title = "Subjects"
                image = "/img/icons/teacher-icon-02.svg"
                count = "227"
               />  

             </div>
             <div class="row">
                    <div class="col-md-12 col-lg-6">

                        <div class="card card-chart">
                            <div class="card-header">
                                <div class="row align-items-center">
                                <div class="col-6">
                                        <h5 class="card-title">Number of Students</h5>
                                    </div>
                                    <BarChart
                                        labels={['I','II','III','IV','V','VI','VII','VIII']}
                                        values= {[96,94,90,80,83,87,91,79]}
                                    />
                                </div>
                            </div>
                            {/* <div class="card-body">
                                <div id="apexcharts-area"></div>
                            </div> */}
                        </div>

                    </div>

                    <div class="col-md-12 col-lg-5">

                        <div class="card card-chart">
                            <div class="card-header">
                                <div class="row align-items-center">
                                    <div class="col-6">
                                        <h5 class="card-title">Gender Ratio</h5>
                                    </div>
                                        <DoughnutChart
                                            labels={['Male','Female']}
                                            values={[286,61]}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    );
}


