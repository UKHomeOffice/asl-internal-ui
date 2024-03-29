module.exports = {
  title: 'Statutory deadlines passed',
  summary: `Review PPLs processed after the deadline. Correct any cases where the deadline didn’t apply and so shouldn’t
be recorded as missed.`,
  metrics: {
    passed: 'Deadlines passed',
    exempt: 'Deadlines not missed',
    notExempt: 'Deadlines missed'
  },
  fields: {
    deadlinePassedDate: {
      label: 'Statutory deadline'
    },
    projectTitle: {
      label: 'Project title'
    },
    isExempt: {
      label: 'Deadline status'
    },
    comment: {
      label: 'Reason for changing deadline status',
      hint: 'Visible to the applicant and ASRU'
    }
  },
  deadline: {
    activity: {
      reason: 'Explanation given by: ',
      exemption: {
        exempt: 'Deadline status changed to not missed by',
        notExempt: 'Deadline status changed to missed by'
      }
    }
  },
  change: {
    exempt: 'Change deadline status to not missed',
    notExempt: 'Change deadline status to missed'
  },
  notifications: {
    success: 'Deadline status changed'
  }
};
