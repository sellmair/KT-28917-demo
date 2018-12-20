if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin-mpp-android-target-demo_test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-mpp-android-target-demo_test'.");
}
if (typeof this['kotlin-mpp-android-target-demo'] === 'undefined') {
  throw new Error("Error loading module 'kotlin-mpp-android-target-demo_test'. Its dependency 'kotlin-mpp-android-target-demo' was not found. Please, check whether 'kotlin-mpp-android-target-demo' is loaded prior to 'kotlin-mpp-android-target-demo_test'.");
}
if (typeof this['kotlin-test'] === 'undefined') {
  throw new Error("Error loading module 'kotlin-mpp-android-target-demo_test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'kotlin-mpp-android-target-demo_test'.");
}
this['kotlin-mpp-android-target-demo_test'] = function (_, Kotlin, $module$kotlin_mpp_android_target_demo, $module$kotlin_test) {
  'use strict';
  var Sample = $module$kotlin_mpp_android_target_demo.sample.Sample;
  var assertTrue = $module$kotlin_test.kotlin.test.assertTrue_ifx8ge$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var hello = $module$kotlin_mpp_android_target_demo.sample.hello;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  function SampleTests() {
  }
  SampleTests.prototype.testMe = function () {
    assertTrue((new Sample()).checkMe() > 0);
  };
  SampleTests.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleTests',
    interfaces: []
  };
  function SampleTestsJS() {
  }
  SampleTestsJS.prototype.testHello = function () {
    assertTrue(contains(hello(), 'JS'));
  };
  SampleTestsJS.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SampleTestsJS',
    interfaces: []
  };
  var package$sample = _.sample || (_.sample = {});
  package$sample.SampleTests = SampleTests;
  package$sample.SampleTestsJS = SampleTestsJS;
  suite('sample', false, function () {
    suite('SampleTests', false, function () {
      test('testMe', false, function () {
        return (new SampleTests()).testMe();
      });
    });
    suite('SampleTestsJS', false, function () {
      test('testHello', false, function () {
        return (new SampleTestsJS()).testHello();
      });
    });
  });
  Kotlin.defineModule('kotlin-mpp-android-target-demo_test', _);
  return _;
}(typeof this['kotlin-mpp-android-target-demo_test'] === 'undefined' ? {} : this['kotlin-mpp-android-target-demo_test'], kotlin, this['kotlin-mpp-android-target-demo'], this['kotlin-test']);
