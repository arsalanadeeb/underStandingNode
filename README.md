# underStandingNode

Note:- require() internally  cashes the reslult for optimisation never return new obj() from that instead attach the refs to module.exports=reference of constructor function.

Note:-Concept of magic string ,as we are using member access operator we have to pass 'strings' , we dont get any IDE help and its hard to debug so magic string is created .Create a config.js in that file export all the events as module.exports.events={ONSAVE:'onSave'} from that config file its easy maintain consistency.
