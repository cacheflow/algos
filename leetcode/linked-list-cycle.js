	
var hasCycle = function(head) {
	let slow = head; 
	let fast = head 
	if(head == null) {
		return false 
	}
	while(fast.next != null && fast.next.next != null) {
		slow = slow.next 
		fast = fast.next.next 
		if(slow == fast) {
			return true 
		}
	}
	return false 
}