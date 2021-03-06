/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  'use strict'

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder         : 'sort-highlight',
    connectWith         : '.connectedSortable',
    handle              : '.card-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex              : 999999
  })
  $('.connectedSortable .card-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move')

  // jQuery UI sortable for the todo list
  $('.todo-list').sortable({
    placeholder         : 'sort-highlight',
    handle              : '.handle',
    forcePlaceholderSize: true,
    zIndex              : 999999
  })

  // bootstrap WYSIHTML5 - text editor
  $('.textarea').wysihtml5()

  $('.daterange').daterangepicker({
    ranges   : {
      'Today'       : [moment(), moment()],
      'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month'  : [moment().startOf('month'), moment().endOf('month')],
      'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate  : moment()
  }, function (start, end) {
    window.alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
  })

  /* jQueryKnob */
  $('.knob').knob()

  // jvectormap data
  var visitorsData = {
    'US': 398, //USA
    'SA': 400, //Saudi Arabia
    'CA': 1000, //Canada
    'DE': 500, //Germany
    'FR': 760, //France
    'CN': 300, //China
    'AU': 700, //Australia
    'BR': 600, //Brazil
    'IN': 800, //India
    'GB': 320, //Great Britain
    'RU': 3000 //Russia
  }
  // World map by jvectormap
  $('#world-map').vectorMap({
    map              : 'world_mill_en',
    backgroundColor  : 'transparent',
    regionStyle      : {
      initial: {
        fill            : 'rgba(255, 255, 255, 0.7)',
        'fill-opacity'  : 1,
        stroke          : 'rgba(0,0,0,.2)',
        'stroke-width'  : 1,
        'stroke-opacity': 1
      }
    },
    series           : {
      regions: [{
        values           : visitorsData,
        scale            : ['#ffffff', '#0154ad'],
        normalizeFunction: 'polynomial'
      }]
    },
    onRegionLabelShow: function (e, el, code) {
      if (typeof visitorsData[code] != 'undefined')
        el.html(el.html() + ': ' + visitorsData[code] + ' new visitors')
    }
  })

  // Sparkline charts
  var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021]
  $('#sparkline-1').sparkline(myvalues, {
    type     : 'line',
    lineColor: '#92c1dc',
    fillColor: '#ebf4f9',
    height   : '50',
    width    : '80'
  })
  myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921]
  $('#sparkline-2').sparkline(myvalues, {
    type     : 'line',
    lineColor: '#92c1dc',
    fillColor: '#ebf4f9',
    height   : '50',
    width    : '80'
  })
  myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21]
  $('#sparkline-3').sparkline(myvalues, {
    type     : 'line',
    lineColor: '#92c1dc',
    fillColor: '#ebf4f9',
    height   : '50',
    width    : '80'
  })

  // The Calender
  $('#calendar').datepicker()

  // SLIMSCROLL FOR CHAT WIDGET
  $('#chat-box').slimScroll({
    height: '250px'
  })

  /* Morris.js Charts */
  // Sales chart
  var area = new Morris.Area({
    element   : 'revenue-chart',
    resize    : true,
    data      : [
      { y: '6: 00', item1: 500, item2: 600 },
      { y: '8: 00', item1: 550, item2: 620 },
      { y: '10: 00', item1: 570, item2: 730 },
      { y: '12: 00', item1: 480, item2: 540 },
      { y: '14: 00', item1: 600, item2: 650 },
      { y: '16: 00', item1: 700, item2: 750 },
      { y: '18: 00', item1: 560, item2: 710 },
      { y: '20: 00', item1: 650, item2: 750 },
      { y: '22: 00', item1: 900, item2: 1000 },
      { y: '24: 00', item1: 800, item2: 900 }
    ],
    xkey      : 'y',
    ykeys     : ['item1', 'item2'],
    labels    : ['Item 1', 'Item 2'],
    lineColors: ['#495057', '#007cff'],
    hideHover : 'auto'
  })
  var line = new Morris.Line({
    element          : 'line-chart',
    resize           : true,
    data             : [
      { t: '6: 00',  压强: 60 },
      { t: '8: 00',  压强: 59 },
      { t: '10: 00', 压强: 43 },
      { t: '12: 00', 压强: 76 },
      { t: '14: 00', 压强: 46 },
      { t: '16: 00', 压强: 55 },
      { t: '18: 00', 压强: 70 },
      { t: '20: 00', 压强: 56 },
      { t: '22: 00', 压强: 67 },
      { t: '24: 00', 压强: 45 }
    ],
    xkey             : 't',
    ykeys            : ['压强'],
    labels           : ['压强'],
    lineColors       : ['#efefef'],
    lineWidth        : 2,
    hideHover        : 'auto',
    gridTextColor    : '#fff',
    gridStrokeWidth  : 0.4,
    pointSize        : 4,
    pointStrokeColors: ['#efefef'],
    gridLineColor    : '#efefef',
    gridTextFamily   : 'Open Sans',
    gridTextSize     : 10
  })

  // Donut Chart
  var donut = new Morris.Donut({
    element  : 'sales-chart',
    resize   : true,
    colors   : ['#007bff', '#dc3545', '#28a745'],
    data     : [
      { label: 'Download Sales', value: 12 },
      { label: 'In-Store Sales', value: 30 },
      { label: 'Mail-Order Sales', value: 20 }
    ],
    hideHover: 'auto'
  })

  // Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    area.redraw()
    donut.redraw()
    line.redraw()
  })
})
