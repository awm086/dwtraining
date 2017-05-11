<isscript>
	importPackage( dw.system);
	
	var CraigLogger :Logger = Logger.getLogger("SampleLog","Craig" );
	CraigLogger.debug( "EXAMPLE DEBUG MESSAGE for CRAIG");
	CraigLogger.info( "EXAMPLE INFO MESSAGE for CRAIG");
	CraigLogger.warn( "EXAMPLE WARN MESSAGE for CRAIG");
	CraigLogger.error("EXAMPLE ERROR MESSAGE for CRAIG");
	CraigLogger.fatal("EXAMPLE FATAL MESSAGE for CRAIG");
</isscript>

hello

<isscript>
	var CraigClassLogger :Logger = Logger.getLogger("SampleLog","Craig.class" );
	CraigClassLogger.debug( "EXAMPLE DEBUG MESSAGE for CRAIG.CLASS");
	CraigClassLogger.info( "EXAMPLE INFO MESSAGE for CRAIG.CLASS");
	CraigClassLogger.warn( "EXAMPLE WARN MESSAGE for CRAIG.CLASS");
	CraigClassLogger.error("EXAMPLE ERROR MESSAGE for CRAIG.CLASS");
	CraigClassLogger.fatal("EXAMPLE FATAL MESSAGE for CRAIG.CLASS");

	var OtherLogger :Logger = Logger.getLogger("SampleLog","Other" );
	OtherLogger.debug( "EXAMPLE DEBUG MESSAGE for Other");
	OtherLogger.info( "EXAMPLE INFO MESSAGE for Other");
	OtherLogger.warn( "EXAMPLE WARN MESSAGE for Other");
	OtherLogger.error("EXAMPLE ERROR MESSAGE for Other");
	OtherLogger.fatal("EXAMPLE FATAL MESSAGE for Other");
</isscript>