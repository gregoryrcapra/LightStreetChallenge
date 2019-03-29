using System.Web;
using System.Web.Optimization;

namespace Light_Street_Challenge
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {

            bundles.Add(new StyleBundle("~/assets/css").Include(
                      "~/assets/css/bootstrap.min.css",
                      "~/assets/css/main.css",
                      "~/assets/css/my-custom-styles.css",
                      "~/assets/css/font-awesome.min.css",
                      "~/assets/css/buttons.dataTables.min.css",
                      "~/assets/css/select.dataTables.min.css",
                      "~/assets/css/bootstrap-slider.min.css",
                      "~/assets/css/TimeCircles.css",
                      "~/assets/css/rowReorder/rowReorder.dataTables.min.css",
                      "~/assets/css/jquery.dataTables.css"));

            bundles.Add(new ScriptBundle("~/assets/js").Include(
                      "~/assets/js/jquery/jquery-2.2.4.min.js",
                      "~/assets/js/bootstrap/bootstrap.js",
                      "~/assets/js/plugins/modernizr/modernizr.js",
                      "~/assets/js/plugins/bootstrap-tour/bootstrap-tour.custom.js",
                      "~/assets/js/plugins/jquery-slimscroll/jquery.slimscroll.min.js",
                      "~/assets/js/king-common.js",
                      "~/assets/js/jquery-ui/jquery-ui-1.10.4.custom.min.js",
                      "~/assets/js/plugins/stat/flot/jquery.flot.min.js",
                      "~/assets/js/plugins/stat/flot/jquery.flot.orderBars.js",
                      "~/assets/js/plugins/stat/flot/jquery.flot.pie.min.js",
                      "~/assets/js/plugins/stat/flot/jquery.flot.resize.min.js",
                      "~/assets/js/plugins/stat/flot/jquery.flot.time.min.js",
                      "~/assets/js/plugins/stat/flot/jquery.flot.tooltip.min.js",
                      "~/assets/js/plugins/jquery-sparkline/jquery.sparkline.min.js",
                      //"~/assets/js/plugins/datatable/jquery.dataTables.min.js",
                      "~/assets/js/plugins/datatable/DataTables/DataTables-1.10.16/js/jquery.dataTables.min.js",
                      "~/assets/js/plugins/datatable/exts/dataTables.colVis.bootstrap.js",
                      "~/assets/js/plugins/datatable/exts/dataTables.colReorder.min.js",
                      "~/assets/js/plugins/datatable/exts/dataTables.tableTools.min.js",
                      "~/assets/js/plugins/datatable/dataTables.bootstrap.js",
                      "~/assets/js/plugins/jqgrid/jquery.jqGrid.min.js",
                      "~/assets/js/plugins/jqgrid/i18n/grid.locale-en.js",
                      "~/assets/js/plugins/jqgrid/jquery.jqGrid.fluid.js",
                      "~/assets/js/plugins/bootstrap-datepicker/bootstrap-datepicker.js",
                      "~/assets/js/plugins/daterangepicker/daterangepicker.js",
                      "~/assets/js/plugins/bootstrap-switch/bootstrap-switch.min.js",
                      "~/assets/js/plugins/jquery-maskedinput/jquery.masked-input.min.js",
                      "~/assets/js/jquery-ui/jquery-ui-1.10.4.custom.min.js",
                      "~/assets/js/plugins/jqallrangesliders/jQAllRangeSliders-min.js",
                      "~/assets/js/plugins/bootstrap-colorpicker/bootstrap-colorpicker.min.js",
                      "~/assets/js/plugins/jquery-simplecolorpicker/jquery.simplecolorpicker.js",
                      "~/assets/js/plugins/bootstrap-touchspin/jquery.bootstrap-touchspin.js",
                      "~/assets/js/plugins/moment/moment.min.js",
                      "~/assets/js/plugins/bootstrap-slider/bootstrap-slider.min.js",
                      "~/assets/js/plugins/select2/select2.min.js",
                      "~/assets/js/plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js",
                      "~/assets/js/king-elements.js",
                      "~/assets/js/plugins/bootstrap-multiselect/bootstrap-multiselect.js",
                      "~/assets/js/king-form-layouts.js",
                      "~/assets/js/king-table.js",
                      "~/assets/js/plugins/parsley-validation/parsley.min.js",
                      "~/assets/js/plugins/czMore/jquery.czMore-1.5.3.2.js",
                      "~/assets/js/plugins/czMore/jquery.czMore-latest.js",
                      "~/assets/js/plugins/datatable/DataTables/Buttons-1.5.2/js/dataTables.buttons.min.js",
                      "~/assets/js/plugins/datatable/DataTables/Buttons-1.5.2/js/buttons.flash.min.js",
                      "~/assets/js/plugins/datatable/DataTables/Buttons-1.5.2/js/buttons.html5.min.js",
                      "~/assets/js/plugins/datatable/DataTables/JSZip-2.5.0/jszip.min.js",
                      "~/assets/js/plugins/datatable/DataTables/dataTables.select.min.js",
                      "~/assets/js/plugins/jquery-csv/jquery.csv.js",
                      "~/assets/js/plugins/timecircles/TimeCircles.js",
                      "~/assets/js/plugins/rowReorder/dataTables.rowReorder.js"));
        }
    }
}
