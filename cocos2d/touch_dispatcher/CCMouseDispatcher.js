/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/**
 * @constant
 * @type Number
 */
cc.MOUSE_DOWN = 1 << 0;

/**
 * @constant
 * @type Number
 */
cc.MOUSE_MOVED = 1 << 1;

/**
 * @constant
 * @type Number
 */
cc.MOUSE_DRAGGED = 1 << 2;

/**
 * @constant
 * @type Number
 */
cc.MOUSE_UP = 1 << 3;

/**
 * @constant
 * @type Number
 */
cc.RIGHT_MOUSE_DOWN = 1 << 4;

/**
 * @constant
 * @type Number
 */
cc.RIGHT_MOUSE_DRAGGED = 1 << 5;

/**
 * @constant
 * @type Number
 */
cc.RIGHT_MOUSE_UP = 1 << 6;

/**
 * @constant
 * @type Number
 */
cc.OTHER_MOUSE_DOWN = 1 << 7;

/**
 * @constant
 * @type Number
 */
cc.OTHER_MOUSE_DRAGGED = 1 << 8;

/**
 * @constant
 * @type Number
 */
cc.OTHER_MOUSE_UP = 1 << 9;

/**
 * @constant
 * @type Number
 */
cc.SCROLL_WHEEL = 1 << 10;

/**
 * @constant
 * @type Number
 */
cc.MOUSE_ENTERED = 1 << 11;

/**
 * @constant
 * @type Number
 */
cc.MOUSE_EXITED = 1 << 12;


/**
 *     CCMouseEventDelegate protocol.
 * Implement it in your node to receive any of mouse events
 */
cc.MouseEventDelegate = cc.Class.extend({
    /**
     * <p>called when the "mouseDown" event is received. <br/>
     * Return YES to avoid propagating the event to other delegates.  </p>
     * @param event
     * @return {Boolean}
     */
    onMouseDown:function (event) {
        return false;
    },

    /**
     * <p>called when the "mouseDragged" event is received.         <br/>
     * Return YES to avoid propagating the event to other delegates.</p>
     * @param event
     * @return {Boolean}
     */
    onMouseDragged:function (event) {
        return false;
    },

    /**
     * <p> called when the "mouseMoved" event is received.            <br/>
     * Return YES to avoid propagating the event to other delegates.  </p>
     * @param event
     * @return {Boolean}
     */
    onMouseMoved:function (event) {
        return false;
    },

    /**
     * <p> called when the "mouseUp" event is received.               <br/>
     * Return YES to avoid propagating the event to other delegates.  </p>
     * @param event
     * @return {Boolean}
     */
    onMouseUp:function (event) {
        return false;
    },

    //right
    /**
     * <p> called when the "rightMouseDown" event is received.        <br/>
     * Return YES to avoid propagating the event to other delegates.  </p>
     * @param event
     * @return {Boolean}
     */
    onRightMouseDown:function (event) {
        return false;
    },

    /**
     * <p> called when the "rightMouseDragged" event is received.    <br/>
     * Return YES to avoid propagating the event to other delegates. </p>
     * @param event
     * @return {Boolean}
     */
    onRightMouseDragged:function (event) {
        return false;
    },

    /**
     * <p> called when the "rightMouseUp" event is received.          <br/>
     * Return YES to avoid propagating the event to other delegates.  </p>
     * @param event
     * @return {Boolean}
     */
    onRightMouseUp:function (event) {
        return false;
    },

    //other
    /**
     * <p>called when the "otherMouseDown" event is received.         <br/>
     * Return YES to avoid propagating the event to other delegates.  </p>
     * @param event
     * @return {Boolean}
     */
    onOtherMouseDown:function (event) {
        return false;
    },

    /**
     * <p> called when the "otherMouseDragged" event is received.     <br/>
     * Return YES to avoid propagating the event to other delegates.  </p>
     * @param event
     * @return {Boolean}
     */
    onOtherMouseDragged:function (event) {
        return false;
    },

    /**
     * <p> called when the "otherMouseUp" event is received.          <br/>
     * Return YES to avoid propagating the event to other delegates.  </p>
     * @param event
     * @return {Boolean}
     */
    onOtherMouseUp:function (event) {
        return false;
    },

    //scroll wheel
    /**
     * <p> called when the "scrollWheel" event is received.           <br/>
     * Return YES to avoid propagating the event to other delegates.  </p>
     * @param event
     * @return {Boolean}
     */
    onScrollWheel:function (event) {
        return false;
    },

    // enter / exit
    /**
     *  <p> called when the "mouseEntered" event is received.         <br/>
     *  Return YES to avoid propagating the event to other delegates. </p>
     * @param theEvent
     * @return {Boolean}
     */
    onMouseEntered:function (theEvent) {
        return false;
    },

    /**
     * <p> called when the "mouseExited" event is received.          <br/>
     * Return YES to avoid propagating the event to other delegates. </p>
     * @param theEvent
     * @return {Boolean}
     */
    onMouseExited:function (theEvent) {
        return false;
    }
});

cc.Mouse = cc.Touch.extend({
    _wheelDelta:0,

    getWheelDelta:function () {
        return this._wheelDelta;
    },

    setWheelDelta:function (delta) {
        this._wheelDelta = delta;
    }
});

/**
 * cc.MouseHandler
 * Object than contains the delegate and priority of the event handler.
 * @class
 * @extends cc.Class
 */
cc.MouseHandler = cc.Class.extend(/** @lends cc.MouseHandler# */{
    _delegate:null,
    _priority:0,
    _enabledSelectors:0,


    /**
     * @return {cc.MouseEventDelegate}
     */
    getDelegate:function () {
        return this._delegate;
    },

    /**
     * @param {cc.TouchDelegate} delegate
     */
    setDelegate:function (delegate) {
        this._delegate = delegate;
    },

    /**
     * @return {Number}
     */
    getPriority:function () {
        return this._priority;
    },

    /**
     * @param {Number} priority
     */
    setPriority:function (priority) {
        this._priority = priority;
    },

    /**
     *  Enabled selectors
     * @return {Number}
     */
    getEnabledSelectors:function () {
        return this._enabledSelectors;
    },

    /**
     * @param {Number} value
     */
    setEnalbedSelectors:function (value) {
        this._enabledSelectors = value;
    },

    initWithDelegate:function (delegate, priority) {
        this._delegate = delegate;
        this._priority = priority;
    }
});

cc.MouseHandler.create = function (delegate, priority) {
    var handler = new cc.MouseHandler();
    handler.initWithDelegate(delegate, priority);
    return handler;
};

cc.MouseDispatcher = cc.Class.extend({
    _mousePressed:false,
    _mouseDelegateHandlers:null,
    _dispatchEvents:false,

    init:function () {
        this._dispatchEvents = true;
        this._mouseDelegateHandlers = [];
        this._mousePressed = false;

        cc.MouseDispatcher._registerHtmlElementEvent(cc.canvas);
        return true;
    },

    _setMousePressed:function (pressed) {
        this._mousePressed = pressed;
    },

    _getMousePressed:function () {
        return this._mousePressed;
    },

    /**
     * Adds a mouse delegate to the dispatcher's list.  <br/>
     * Delegates with a lower priority value will be called before higher priority values.   <br/>
     * All the events will be propagated to all the delegates, unless the one delegate returns YES.      </br>
     * @param delegate
     * @param priority
     */
    addMouseDelegate:function (delegate, priority) {
        var handler = cc.MouseHandler.create(delegate, priority);

        this._mouseDelegateHandlers = this.forceAddHandler(handler, this._mouseDelegateHandlers);
    },

    /**
     *  Force add handler
     * @param {cc.TouchHandler} handler
     * @param {Array} array
     * @return {Array}
     */
    forceAddHandler:function (handler, array) {
        var u = 0;

        for (var i = 0; i < array.length; i++) {
            var h = array[i];
            if (h) {
                if (h.getPriority() < handler.getPriority()) {
                    ++u;
                }
                if (h.getDelegate() == handler.getDelegate()) {
                    cc.Assert(0, "TouchDispatcher.forceAddHandler()");
                    return array;
                }
            }
        }
        return cc.ArrayAppendObjectToIndex(array, handler, u);
    },

    /**
     * removes a mouse delegate
     * @param delegate
     */
    removeMouseDelegate:function (delegate) {
        if (delegate == null)
            return;

        for (var i = 0; i < this._mouseDelegateHandlers.length; i++) {
            var handler = this._mouseDelegateHandlers[i];
            if (handler && handler.getDelegate() == delegate) {
                cc.ArrayRemoveObject(this._mouseDelegateHandlers, handler);
                break;
            }
        }
    },

    _findHandler:function (delegate) {
        for (i = 0; i < this._mouseDelegateHandlers.length; i++) {
            if (this._mouseDelegateHandlers[i] && this._mouseDelegateHandlers[i].getDelegate() == delegate) {
                return this._mouseDelegateHandlers[i];
            }
        }
    },

    setPriority:function (priority, delegate) {
        cc.Assert(delegate != null, "MouseDispatcher.setPriority():Arguments is null");
        var handler = this._findHandler(delegate);
        cc.Assert(handler != null, "MouseDispatcher.setPriority():Cant find MouseHandler");

        if (handler.getPriority() != priority) {
            handler.setPriority(priority);
            this._mouseDelegateHandlers.sort(cc.less);
        }
    },

    /**
     * Removes all mouse delegates, releasing all the delegates
     */
    removeAllMouseDelegates:function () {
        this._mouseDelegateHandlers.length = 0;
    },

    mouseHandle:function (mouseObj, event, index) {
        for(var i = 0 ; i < this._mouseDelegateHandlers.length; i++){
            var handler = this._mouseDelegateHandlers[i];

            switch(index){
                case cc.MOUSE_DOWN:
                    handler.getDelegate().onMouseDown(mouseObj);
                    break;
                case cc.MOUSE_UP:
                    handler.getDelegate().onMouseUp(mouseObj);
                    break;
                case cc.MOUSE_MOVED:
                    if(this._mousePressed)
                        handler.getDelegate().onMouseDragged(mouseObj);
                    else
                        handler.getDelegate().onMouseMoved(mouseObj);
                    break;
                case cc.MOUSE_ENTERED:
                    handler.getDelegate().onMouseEntered(mouseObj);
                    break;
                case cc.MOUSE_EXITED:
                    handler.getDelegate().onMouseExited(mouseObj);
                    break;
                case cc.SCROLL_WHEEL:
                    handler.getDelegate().onScrollWheel(mouseObj);
                    break;
            }
        }
    }
});

cc.MouseDispatcher._preMousePoint = cc.p(0, 0);

cc.MouseDispatcher._isRegisterEvent = false;

cc.MouseDispatcher._registerHtmlElementEvent = function (element) {
    if (cc.MouseDispatcher._isRegisterEvent)
        return;

    window.addEventListener('mousedown', function (event) {
        cc.Director.getInstance().getMouseDispatcher()._setMousePressed(true);
    });

    window.addEventListener('mouseup', function (event) {
        cc.Director.getInstance().getMouseDispatcher()._setMousePressed(false);
    });

    function getMouseByEvent(event) {
        var pos = cc.getHTMLElementPosition(element);

        var tx = event.pageX;
        var ty = event.pageY;

        var mouseX = (tx - pos.left) / cc.Director.getInstance().getContentScaleFactor();
        var mouseY = (pos.height - (ty - pos.top)) / cc.Director.getInstance().getContentScaleFactor();

        var mouse = new cc.Mouse(mouseX, mouseY);
        mouse._setPrevPoint(cc.MouseDispatcher._preMousePoint.x, cc.MouseDispatcher._preMousePoint.y);
        cc.MouseDispatcher._preMousePoint.x = mouseX;
        cc.MouseDispatcher._preMousePoint.y = mouseY;

        return mouse;
    }

    //register canvas mouse event
    element.addEventListener("mousedown", function (event) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(getMouseByEvent(event), event, cc.MOUSE_DOWN);
    });

    element.addEventListener("mouseup", function (event) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(getMouseByEvent(event), event, cc.MOUSE_UP);
    });

    element.addEventListener("mousemove", function (event) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(getMouseByEvent(event), event, cc.MOUSE_MOVED);
    });

    element.addEventListener("mousewheel", function (event) {
        var mouse = getMouseByEvent(event);
        mouse.setWheelDelta(event.wheelDelta);
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(mouse, event, cc.SCROLL_WHEEL);
    }, false);

    element.addEventListener("mouseout", function (event) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(getMouseByEvent(event), event, cc.MOUSE_EXITED);
    }, false);

    element.addEventListener("mouseover", function (event) {
        cc.Director.getInstance().getMouseDispatcher().mouseHandle(getMouseByEvent(event), event, cc.MOUSE_ENTERED);
    }, false);
};



